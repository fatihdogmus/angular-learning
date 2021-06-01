import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "form-reactive",
  templateUrl: "./form-reactive.component.html"
})
export class FormReactiveComponent {

  usernameControl: FormControl = new FormControl("asdasd");

  formModel: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.usernameControl.valueChanges
      .subscribe(value => console.log(value));
    this.usernameControl.statusChanges
      .subscribe(event => console.log(event));

    this.formModel = new FormGroup({
      username: new FormControl(""),
      ssn: new FormControl(""),
      passwordsGroup: new FormGroup({
        password: new FormControl(""),
        pconfirm: new FormControl("")
      })
    });

    this.formModel = formBuilder.group({
      username: [""],
      ssn: [""],
      passwordGroup: formBuilder.group({
        password: formBuilder.control("",Validators.min(4),),
        pconfirm: [""]
      })
    }, {updateOn: "blur"});
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

  setValue(value: Record<string, unknown>) {
    this.formModel.setValue(value);
  }

  patchValue(value: Record<string, unknown>) {
    this.formModel.patchValue(value);
  }
}
