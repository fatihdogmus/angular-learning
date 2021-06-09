import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'validation',
  templateUrl: './validation.component.html',
})
export class ValidationComponent {

  @ViewChild("f") form: ElementRef;

  formModel: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.formModel = formBuilder.group({
      age: formBuilder.control("", [Validators.min(18)])
    })
  }

  isValid() {
    return this.formModel.controls["age"];
  }


}
