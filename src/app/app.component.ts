import { Component } from "@angular/core";
import * as yup from "yup";
import { AnyObjectSchema, ValidationError } from "yup";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";

abstract class ValidatingFormModel {
  errors: Record<string, string> = {};

  validate(): Record<string, string> | null {
    this.errors = {};
    try {
      this.scheme.validateSync(this, { abortEarly: false });
    } catch (error: unknown) {
      return this.populateErrors(error);
    }
    return null;
  }

  private populateErrors(error: unknown) {
    const validationErrors = (error as ValidationError).inner;
    for (const validationError of validationErrors) {
      this.errors[validationError.path] = validationError.message;
    }
    return this.errors;
  }

  protected abstract get scheme(): AnyObjectSchema;
}

class User extends ValidatingFormModel {
  username: string;
  password: string;
  gender: "Male" | "Female";
  birthDate: Date;
  age: number;

  protected get scheme(): AnyObjectSchema {
    return yup.object().shape({
      username: yup.string().required("Username is a requierd field!"),
      password: yup.string().required(),
      gender: yup.string().required(),
      birthDate: yup.date().required(),
      age: yup.number().required(),
    });
  }
}

@Component({
  selector: "angular-learning-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  user: User = new User();
  formControl: FormControl = new FormControl("");

  constructor(private router: Router) {
    this.formControl.valueChanges.pipe(debounceTime(500)).subscribe((value) => console.log(value));
  }

  onSubmit() {
    this.router.navigate(["/registration", 3], { state: { name: "fatih" } });
  }
}
