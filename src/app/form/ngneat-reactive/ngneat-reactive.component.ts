import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@ngneat/reactive-forms";
import { Validators } from "@angular/forms";

interface RegistrationModel {
  username: string;
  password: string;
  gender: "Male" | "Female" | "";
  birthDate: Date;
  age: number;
}

@Component({
  selector: 'ngneat-reactive',
  templateUrl: './ngneat-reactive.component.html',
  styleUrls: ['./ngneat-reactive.component.scss']
})
export class NgneatReactiveComponent {

  model: FormGroup<RegistrationModel>;

  constructor() {
    this.model = new FormGroup<RegistrationModel>({
      username: new FormControl("", [Validators.required, Validators.minLength(4)]),
      password: new FormControl(""),
      gender: new FormControl("", [Validators.required]),
      birthDate: new FormControl(new Date()),
      age: new FormControl(0)
    })
  }

  submitted() {
    console.log(this.model.value)
  }
}
