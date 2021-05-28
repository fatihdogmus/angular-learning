import { Injectable } from "@angular/core";
import { RegistrationApiService } from "./registration-api.service";

@Injectable()
export class HebeleService {
  constructor(private api: RegistrationApiService) {
    api.hebele();
  }
}
