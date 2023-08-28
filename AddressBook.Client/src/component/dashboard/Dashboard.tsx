import { useEffect, useReducer, useState } from "react";
import { CardsListToDoActions } from "../../common/enums/ActionTypes";
import Popup from "./popup/Popup";
import Menubar from "./menubar/Menubar";
import Contact from "./contact/Contact";
import ContactCard from "./contactCard/ContactCard";
import ContactForm from "./contactForm/ContactForm";
import IContactCard from "../../interfaces/IContactCard";
import ContactCardListReducer from "../../reducers/ContactCardListReducer";
import ContactService from "../../services/ContactService";

import "./Dashboard.scss";

function Dashboard() {
  const [isFormVisible, setIsFormVisible] = useState<boolean>();
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [contactCardList, contactCardListDispatch] = useReducer(
    ContactCardListReducer,
    []
  );
  const contactServices = new ContactService();

  useEffect(() => {
    const { request, cancel } = contactServices.getAll();
    request
      .then(({ data: cards }) => {
        contactCardListDispatch({
          type: CardsListToDoActions.INITIAL_STATE,
          payload: cards,
        });
      })
      .catch((err) => console.log(err.message));
    return () => cancel();
  }, []);

  const handleDeleteClick = () => {
    if (selectedId) {
      deleteCard(selectedId);
      setIsPopupVisible(true);
      setSelectedId(null);
    }
  };

  const toggleForm = () => setIsFormVisible((prev) => !prev);

  const addCard = (card: IContactCard) =>
    contactCardListDispatch({ type: CardsListToDoActions.ADD, payload: card });

  const editCard = (card: IContactCard) =>
    contactCardListDispatch({ type: CardsListToDoActions.EDIT, payload: card });

  const deleteCard = (id: number) =>
    contactCardListDispatch({ type: CardsListToDoActions.DELETE, payload: id });

  return (
    <>
      <Menubar
        toggleForm={toggleForm}
        resetSelectedId={() => setSelectedId(null)}
      />

      <section className="dashboard">
        <div className="contact-card-list">
          <h1 className="heading">Contacts</h1>
          <ul className="contacts">
            {contactCardList.map((card) => (
              <li
                key={card.id}
                className="list-item "
                onClick={() => setSelectedId(card.id)}
              >
                <ContactCard card={card} />
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-container">
          {selectedId && (
            <Contact
              id={selectedId}
              onDeleteClick={handleDeleteClick}
              onEditClick={toggleForm}
            />
          )}
        </div>
      </section>

      {isFormVisible && (
        <ContactForm
          id={selectedId}
          toggleForm={toggleForm}
          addCard={addCard}
          editCard={editCard}
          resetSelectId={() => setSelectedId(null)}
        />
      )}

      {isPopupVisible && <Popup closePopup={() => setIsPopupVisible(false)} />}
    </>
  );
}

export default Dashboard;
