import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "registration-form",
  templateUrl: "./registration-form.component.html",
})
export class RegistrationFormComponent {
  @Output() nameChanged = new EventEmitter<string>();

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.nameChanged.emit(target.value);
  }
}
