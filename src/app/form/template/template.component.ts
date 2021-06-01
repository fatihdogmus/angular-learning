import { Component } from "@angular/core";

interface RegistrationFormModel {
  username:string,
  ssn:string,
  passwordsGroup: {
    password:string,
    pconfirm:string
  }
}

@Component({
  selector: "form-template",
  templateUrl: "./template.component.html"
})
export class TemplateComponent {

  onSubmit(value: RegistrationFormModel) {
    console.log(value.username);
  }
}
