import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { ValidationComponent } from './validation/validation.component';
import { ForbiddenNameValidatorDirective } from "./validation/forbidden-name-validator.directive";
import { YupComponent } from './validation/yup/yup.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { NgneatReactiveComponent } from './ngneat-reactive/ngneat-reactive.component';
import { MatInputModule } from "@angular/material/input";
import { ErrorTailorModule } from "@ngneat/error-tailor";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [
    TemplateComponent,
    FormReactiveComponent,
    ValidationComponent,
    ForbiddenNameValidatorDirective,
    YupComponent,
    NgneatReactiveComponent,
  ],

  exports: [TemplateComponent, FormReactiveComponent, ValidationComponent, YupComponent, NgneatReactiveComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    ErrorTailorModule,
    MatSelectModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDividerModule,
  ],
})
export class FormModule {}
