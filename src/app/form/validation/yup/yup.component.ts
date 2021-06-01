import { Component, OnInit } from "@angular/core";
import { AnyObjectSchema, date, number, object, string } from "yup";
import { ValidatingFormModel } from "./validatingFormModel";

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
      age: number().required()
    });
  }

}


@Component({
  selector: "yup",
  templateUrl: "./yup.component.html"
})
export class YupComponent implements OnInit {

  user: User = new User();

  constructor() {
  }

  ngOnInit(): void {
  }

  submitted() {
    console.log(this.user);
    this.user.validate();
    if (this.user.valid) {
      //Server stuff
    }
  }
}
