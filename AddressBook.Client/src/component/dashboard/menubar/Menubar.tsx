import blogIcon from "../../../assets/blog-icon.png";

import "./Menubar.scss";

interface IProp {
  toggleForm: () => void;
  resetSelectedId: () => void;
}

function Menubar({ toggleForm, resetSelectedId }: IProp) {
  return (
    <section className="menubar">
      <ul className="menus">
        <li>
          <button onClick={resetSelectedId} className="btn text-white ">
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              toggleForm();
              resetSelectedId();
            }}
            className="btn text-white"
          >
            +Add
          </button>
        </li>
      </ul>
      <div className="blog-icon-container">
        <img className="blog-icon" src={blogIcon} alt="" />
      </div>
    </section>
  );
}

export default Menubar;
