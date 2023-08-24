import "./IconButton.scss";

interface IProp {
  icon: string;
  tag: string;
  onClick: () => void;
}

function IconButton({ icon, tag, onClick }: IProp) {
  return (
    <button className="icon-tag-button" onClick={onClick}>
      <img className="icon-pic" src={icon} alt="" />
      {tag}
    </button>
  );
}

export default IconButton;
