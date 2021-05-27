import { Component } from "@angular/core";
import { RegistrationApiService } from "./registration-api.service";
import { BehaviorSubject } from "rxjs";

interface User {
  name: string;
}

@Component({
  selector: "angular-learning-registration",
  templateUrl: "./registration.component.html",
  providers: [RegistrationApiService],
})
export class RegistrationComponent {
  private state = new BehaviorSubject("");

  nameChanged(name: string) {
    console.log(name);
  }
}
