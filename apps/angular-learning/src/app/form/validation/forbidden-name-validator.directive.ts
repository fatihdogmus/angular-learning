import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

@Directive({
  selector: "[customTemplateValidator]",
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenNameValidatorDirective, multi: true }]
})
export class ForbiddenNameValidatorDirective implements Validator {
  @Input() forbiddenName: string;

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value as string === this.forbiddenName) {
      return { "bobValidation": `Name can't be ${this.forbiddenName}` };
    }
    return null;
  }
}

export function reactiveForbiddenNameValidator(forbiddenName: string): ValidatorFn {
  return function(control: AbstractControl): ValidationErrors | null {
    if (control.value as string === forbiddenName) {
      return { "bobValidation": `Name can't be ${forbiddenName}` };
    }
    return null;
  }
}
