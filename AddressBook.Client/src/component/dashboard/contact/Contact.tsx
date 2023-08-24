import { useState, useEffect } from "react";
import IconButton from "../../common/iconButton/IconButton";
import editIcon from "../../../assets/edit1.jpg";
import deleteIcon from "../../../assets/delete1.png";
import IContact from "../../../interfaces/IContact";
import ContactService from "../../../services/ContactService";

import "./contact.scss";

interface IProp {
  id: number;
  onEditClick : () => void;
  onDeleteClick : () => void
}

function Contact({ id, onEditClick , onDeleteClick}: IProp) {
  const [contact, setContact] = useState<IContact | null>(null);
  const contactService = new ContactService();

  useEffect(() => {
    const { request, cancel } = contactService.get(id);
    request
      .then(({ data: contact }) => setContact(contact))
      .catch((err) => console.log(err.message));

    return () => cancel();
  }, [id]);

  return (
    <div className="contact">
      <div className="name-container">
        <p className="name"> {contact?.name} </p>
        <ul className="options">
          <li>
            <IconButton
              icon={editIcon}
              tag="Edit"
              onClick={onEditClick}
            />
          </li>
          <li>
            <IconButton
              icon={deleteIcon}
              tag="Delete"
              onClick={() => {
                contactService.delete(id);
                onDeleteClick();
              }}
            />
          </li>
        </ul>
      </div>
      <p className="email">{`Email : ${contact?.email}`}</p>
      <div className="contact-numbers">
        <p className="mobile">{`Phone : +91 ${contact?.mobile}`}</p>
        <p className="landline">{`Landline : ${contact?.landline}`}</p>
      </div>
      <p className="website">{`Website : ${contact?.website}`} </p>
      <div className="address-container">
        <p className="address-heading">Address : </p>
        <p className="address">{`${contact?.address}`}</p>
      </div>
    </div>
  );
}

export default Contact;
