import { Component } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@ngneat/reactive-forms";
import { Validators } from "@angular/forms";

class RegistrationModel {
  username: string;
  password: string;
  gender: "Male" | "Female" | "";
  birthDate: Date;
  age: number;

  constructor(username: string, password: string, gender: "Male" | "Female" | "", birthDate: Date, age: number) {
    this.username = username;
    this.password = password;
    this.gender = gender;
    this.birthDate = birthDate;
    this.age = age;
  }

}

@Component({
  selector: "ngneat-reactive",
  templateUrl: "./ngneat-reactive.component.html",
  styleUrls: ["./ngneat-reactive.component.scss"],
})
export class NgneatReactiveComponent {
  model: FormGroup<RegistrationModel>;

  constructor() {
    const builder = new FormBuilder();
    this.model = builder.group<RegistrationModel>({
      username: "",
      password: "",
      gender:"",
      birthDate: new Date(),
      age:0
    })
    // this.model = new FormGroup<RegistrationModel>({
    //   username: new FormControl<string>("", [Validators.required, Validators.minLength(4)]),
    //   password: new FormControl<string>(""),
    //   gender: new FormControl<"Male" | "Female" | "">("", [Validators.required]),
    //   birthDate: new FormControl<Date>(new Date()),
    //   age: new FormControl<number>(0),
    // });
  }

  submitted() {
    this.model.controls.age.errors$
  }
}
