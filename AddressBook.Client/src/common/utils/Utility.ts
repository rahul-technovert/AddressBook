import { IContactForm } from "../../interfaces/IContactForm";
import ILength from "../../interfaces/ILength";
import IContact from "../../interfaces/IContact";
import IContactCard from "../../interfaces/IContactCard";
import ErrorMessage from "./ErrorMessage";
import { Regexp } from "../constants/Constants";
import { InputLength } from "../constants/Constants";

export default class Utitlity {
  getDefaultForm(): IContactForm {
    return {
      name: {
        value: "",
        regexp: Regexp.name,
        error: "",
      },
      email: {
        value: "",
        regexp: Regexp.email,
        error: "",
      },
      mobile: {
        value: "",
        regexp: Regexp.number,
        error: "",
      },
      landline: {
        value: "",
        regexp: Regexp.number,
        error: "",
      },
      website: {
        value: "",
        regexp: Regexp.website,
        error: "",
      },
      address: {
        value: "",
        regexp: Regexp.address,
        error: "",
      },
    };
  }

  validateForm(form: IContactForm): IContactForm {
    const validatedForm: IContactForm = {
      id: form.id,
      name: { ...form.name },
      address: { ...form.address },
      email: { ...form.email },
      mobile: { ...form.mobile },
      landline: { ...form.landline },
      website: { ...form.website },
    };
    validatedForm.email.error = this.validateInput(
      form.email.value,
      form.email.regexp
    );
    validatedForm.website.error = this.validateInput(
      form.website.value,
      form.website.regexp
    );
    validatedForm.mobile.error = this.validateInput(
      form.mobile.value,
      form.mobile.regexp
    );
    validatedForm.landline.error = this.validateInput(
      form.landline.value,
      form.landline.regexp
    );
    validatedForm.name.error = this.validateInput(
      form.name.value,
      form.name.regexp,
      {
        min: InputLength.Name.Min,
        max: InputLength.Name.Max,
      }
    );
    validatedForm.address.error = this.validateInput(
      form.address.value,
      form.address.regexp,
      {
        min: InputLength.Address.Min,
        max: InputLength.Address.Max,
      }
    );

    return validatedForm;
  }

  validateInput(
    value: string,
    regexp: RegExp,
    length: ILength | null = null
  ): string {
    const errorMessages = new ErrorMessage();
    const trimmedValue = value.trim();
    if (trimmedValue === "") return errorMessages.required;

    if (!regexp.test(trimmedValue)) return errorMessages.invalid;

    if (length !== null) {
      const { min, max } = length;
      if (trimmedValue.length < min) return errorMessages.minLength(min);
      if (trimmedValue.length > max) return errorMessages.maxLength(max);
    }

    return "";
  }

  mapContactToCard = (contact: IContact): IContactCard => {
    return {
      id: contact.id!,
      name: contact.name,
      mobile: contact.mobile,
      email: contact.email,
    };
  };

  mapContactToForm(contact: IContact): IContactForm {
    return {
      id: contact.id,
      name: {
        value: contact.name,
        regexp: Regexp.name,
        error: "",
      },
      email: {
        value: contact.email,
        regexp: Regexp.email,
        error: "",
      },
      mobile: {
        value: contact.mobile,
        regexp: Regexp.number,
        error: "",
      },
      landline: {
        value: contact.landline,
        regexp: Regexp.number,
        error: "",
      },
      website: {
        value: contact.website,
        regexp: Regexp.website,
        error: "",
      },
      address: {
        value: contact.address,
        regexp: Regexp.address,
        error: "",
      },
    };
  }

  mapFormToContact(form: IContactForm): IContact {
    return {
      id: form.id,
      name: form.name.value,
      email: form.email.value,
      address: form.address.value,
      website: form.website.value,
      mobile: form.mobile.value,
      landline: form.landline.value,
    };
  }

  isFormValid(form: IContactForm): boolean {
    let isvalid = true;
    Object.values(form).forEach((field) => {
      if (field && field.error) {
        isvalid = false;
      }
    });

    return isvalid;
  }
}
