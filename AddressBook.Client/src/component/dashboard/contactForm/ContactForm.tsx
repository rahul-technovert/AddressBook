import Input from "../../common/input/Input";
import Utitlity from "../../../common/utils/Utility";
import IContactCard from "../../../interfaces/IContactCard";
import ContactService from "../../../services/ContactService";
import { FormEvent, useEffect, useState } from "react";
import { IContactForm } from "../../../interfaces/IContactForm";
import { Regexp } from "../../../common/constants/Constants";

import "./ContactForm.scss";

interface IProp {
  id: number | null;
  toggleForm: () => void;
  addCard: (card: IContactCard) => void;
  editCard: (card: IContactCard) => void;
  resetSelectId: () => void;
}

function ContactForm({
  id,
  toggleForm,
  addCard,
  editCard,
  resetSelectId,
}: IProp) {
  const utils = new Utitlity();
  const contactService = new ContactService();
  const [form, setForm] = useState<IContactForm>(utils.getDefaultForm());

  useEffect(() => {
    if (id) {
      const { request, cancel } = contactService.get(id);
      request
        .then(({ data: contact }) => setForm(utils.mapContactToForm(contact)))
        .catch((err) => console.log(err.message));

      return () => cancel();
    }
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const validatedForm = utils.validateForm(form);

    if (utils.isFormValid(validatedForm)) {
      const mappedContact = utils.mapFormToContact(validatedForm);
      if (!form.id) {
        contactService
          .create(mappedContact)
          .then(({ data: contact }) => addCard(utils.mapContactToCard(contact)))
          .catch((err) => console.log(err.message));
      } else {
        editCard(utils.mapContactToCard(mappedContact));
        contactService
          .update(mappedContact)
          .then(() => editCard(utils.mapContactToCard(mappedContact)))
          .catch((err) => console.log(err.message));
      }
      toggleForm();
      resetSelectId();
      return;
    }
    setForm(validatedForm);
  };

  return (
    <div className={`form-container`}>
      <form className="contact-form">
        <h2 className="text-center mb-4 text-info">Add Contact</h2>
        <Input
          label="Name"
          type="text"
          value={form?.name.value ?? ""}
          error={form?.name.error ?? ""}
          required={true}
          onChange={(value) => {
            const error = utils.validateInput(value, Regexp.name);
            setForm({ ...form, name: { ...form.name, value, error } });
          }}
        />
        <Input
          label="Email"
          type="text"
          value={form?.email.value ?? ""}
          error={form?.email.error ?? ""}
          required={true}
          onChange={(value) => {
            const error = utils.validateInput(value, Regexp.email);
            setForm({
              ...form,
              email: { ...form.email, value, error },
            });
          }}
        />
        <div className="d-flex flex-row gap-4">
          <Input
            label="Mobile"
            type="number"
            value={form?.mobile.value ?? ""}
            error={form?.mobile.error ?? ""}
            required={true}
            onChange={(value) => {
              const error = utils.validateInput(value, Regexp.number);
              setForm({
                ...form,
                mobile: { ...form.mobile, value, error },
              });
            }}
          />
          <Input
            label="Landline"
            type="number"
            value={form?.landline.value ?? ""}
            error={form?.landline.error ?? ""}
            required={true}
            onChange={(value) => {
              const error = utils.validateInput(value, Regexp.number);
              setForm({
                ...form,
                landline: { ...form.landline, value, error },
              });
            }}
          />
        </div>
        <Input
          label="Website"
          type="text"
          value={form?.website.value ?? ""}
          error={form?.website.error ?? ""}
          required={true}
          onChange={(value) => {
            const error = utils.validateInput(value, Regexp.website);
            setForm({
              ...form,
              website: { ...form.website, value, error },
            });
          }}
        />
        <Input
          label="Address"
          type="text"
          value={form?.address.value ?? ""}
          error={form?.address.error ?? ""}
          required={true}
          onChange={(value) => {
            const error = utils.validateInput(value, Regexp.address);
            setForm({
              ...form,
              address: { ...form.address, value, error },
            });
          }}
        />

        <button onClick={handleSubmit} className="btn btn-success float-end">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-secondary float-end me-3"
          onClick={toggleForm}
        >
          close
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
