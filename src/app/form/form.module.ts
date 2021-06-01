import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { ValidationComponent } from './validation/validation.component';
import { ForbiddenNameValidatorDirective } from "./validation/forbidden-name-validator.directive";
import { YupComponent } from './validation/yup/yup.component';
import { MatDatepickerModule } from "@angular/material/datepicker";

@NgModule({
  declarations: [
    TemplateComponent,
    FormReactiveComponent,
    ValidationComponent,
    ForbiddenNameValidatorDirective,
    YupComponent
  ],
  exports: [
    TemplateComponent,
    FormReactiveComponent,
    ValidationComponent,
    YupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule
  ]
})
export class FormModule { }
