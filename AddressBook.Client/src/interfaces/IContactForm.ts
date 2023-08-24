export interface IContactForm {
  id?: number;
  name: IField<string>;
  email: IField<string>;
  mobile: IField<string>;
  landline: IField<string>;
  website: IField<string>;
  address: IField<string>;
}

export interface IField<T> {
  value: T;
  regexp: RegExp;
  error: string;
}
