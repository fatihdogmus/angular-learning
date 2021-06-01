import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { AnyObjectSchema, date, number, object, string } from "yup";
import { ValidatingFormModel } from "./validatingFormModel";
import { NgForm } from "@angular/forms";
import { debounceTime } from "rxjs/operators";

class User extends ValidatingFormModel {
  username: string;
  password: string;
  gender: "Male" | "Female";
  birthDate: Date;
  age: number;

  protected get scheme(): AnyObjectSchema {
    return object().shape({
      username: string()
        .required("Username is a required field!")
        .min(4, "The username can't be shorter than 4 characters"),
      password: string().required(),
      gender: string().required(),
      birthDate: date().required(),
      age: number().required(),
    });
  }
}

@Component({
  selector: "yup",
  templateUrl: "./yup.component.html",
})
export class YupComponent {
  user: User = new User();

  @ViewChild("form") form: NgForm;

  submitted() {
    const onChangeSubscription = this.form.valueChanges
      ?.subscribe(() => this.user.validate());
    console.log(this.user);
    this.user.validate();
    if (this.user.valid) {
      //Server stuff
    }
  }
}
