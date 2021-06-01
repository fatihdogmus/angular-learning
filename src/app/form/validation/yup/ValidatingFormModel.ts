import { AnyObjectSchema, ValidationError } from "yup";

export abstract class ValidatingFormModel {

  errors = new Map<string, string>();

  validate(): Map<string, string> {
    this.errors.clear();
    try {
      this.scheme.validateSync(this, { abortEarly: false });
    } catch (error: unknown) {
      this.populateErrors(error);
    }
    console.log(this.errors);
    return this.errors;
  }

  private populateErrors(error: unknown): void {
    const validationErrors = (error as ValidationError).inner;
    for (const validationError of validationErrors) {
      if (validationError.path && !this.errors.has(validationError.path)) {
        this.errors.set(validationError.path, validationError.message);
      }
    }
  }

  protected abstract get scheme(): AnyObjectSchema;

  get valid(): boolean {
    return this.errors.size == 0;
  }

  get invalid(): boolean {
    return !this.valid;
  }
}
