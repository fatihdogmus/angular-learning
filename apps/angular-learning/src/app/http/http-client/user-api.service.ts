import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private readonly http: HttpClient) {  }

  async getUsers(): Promise<User[]> {
    return firstValueFrom(this.http
      .get<User[]>("https://jsonplaceholder.typicode.com/users"));
  }
}
