import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom, Observable } from "rxjs";
import { User } from "./user";
import { UserApiService } from "./user-api.service";

@Component({
  selector: "http-client",
  templateUrl: "./http-client.component.html",
})
export class HttpClientComponent implements OnInit {
  users: User[];

  constructor(private readonly http: HttpClient, private readonly userApi: UserApiService) {}

  async ngOnInit() {
    this.users = await this.userApi.getUsers();
  }

  async postRequest() {
    const body = {
      name: "Fatih Doğmuş",
      username: "fatih.dogmus",
      email: "test@test.com",
    };

    const user = await firstValueFrom(this.http.post<User>("https://jsonplaceholder.typicode.com", body));

    console.log(user);
  }
}
