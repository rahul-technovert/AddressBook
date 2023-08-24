export default interface IErrorMessage{
    required: string;
    invalid: string;
    minLength: (minValue: number) => string;
    maxLength: (maxValue: number) => string;
}