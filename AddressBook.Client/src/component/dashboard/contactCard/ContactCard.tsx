import IContactCard from "../../../interfaces/IContactCard";

import "./contactCard.scss";

function ContactCard({ card }: { card: IContactCard }) {
  return (
    <div className="contact-card">
      <p className="name">{card.name}</p>
      <p className="email">{card.email}</p>
      <p className="phone">{"+91 " + card.mobile}</p>
    </div>
  );
}

export default ContactCard;
