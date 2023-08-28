import IErrorMessage from "../../interfaces/IErrorMessage";

export default class ErrorMessage implements IErrorMessage {
  required: string;
  invalid: string;

  constructor() {
    this.required = "The field is required";
    this.invalid = "The given input is invalid";
  }

  minLength(min: number) {
    return `Minimum required length is ${min}`;
  }

  maxLength(max: number) {
    return `Maximum possible length is ${max}`;
  }
}
