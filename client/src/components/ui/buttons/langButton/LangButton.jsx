import BaseButton from "../BaseButton.jsx";

function LangButton({ text, className }) {
  return (
    <BaseButton className={`${className ?? ""}`}>
      <span>{text}</span>
    </BaseButton>
  );
}

export default LangButton;
