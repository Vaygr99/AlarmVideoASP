import IconTextButton from "../../buttons/iconTextButton/IconTextButton.jsx";
import List from "./List.jsx";

// Button (with icon and text) for opening list items
function ButtonList({ text, icon, list }) {
  return (
    <div>
      <IconTextButton text={text} icon={icon} />
      <List list={list} />
    </div>
  );
}

export default ButtonList;
