import { Component } from "@angular/core";
import * as yup from "yup";
import { AnyObjectSchema, ValidationError } from "yup";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";


@Component({
  selector: "angular-learning-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  formControl: FormControl = new FormControl("");

  constructor(private router: Router) {
    this.formControl.valueChanges.pipe(debounceTime(500)).subscribe((value) => console.log(value));
  }

  onSubmit() {
    this.router.navigate(["/registration", 3], { state: { name: "fatih" } });
  }
}
