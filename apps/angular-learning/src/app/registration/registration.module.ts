import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegistrationComponent } from "./registration.component";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { RegistrationRoutingModule } from "./registration-routing/registration-routing.module";

@NgModule({
  declarations: [RegistrationComponent, RegistrationFormComponent],
  imports: [CommonModule, RegistrationRoutingModule],
  exports: [RegistrationComponent],
})
export class RegistrationModule {}
