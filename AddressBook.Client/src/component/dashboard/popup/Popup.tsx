import deleteLogo from '../../../assets/delete.svg';

import "./Popup.scss";

function Popup({closePopup} : {closePopup : () => void}) {
  return (
    <div className="popup">
      <div className="popup-box">
        <div className="image-container">
          <img src={deleteLogo} alt="" />
        </div>
        <p className="message">SuccessFully Deleted</p>
        <button onClick={closePopup} className="button">
          Okay
        </button>
      </div>
    </div>
  );
}

export default Popup;
