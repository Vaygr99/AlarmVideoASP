import styles from "./BaseInput.module.css";

// Controlled input element
function ControlledInput({
  placeholder = "",
  type = "text",
  className = "",
  value,
  setState,
}) {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      className={`${className} ${styles.container}`}
      onChange={(e) => setState(e.target.value)}
    />
  );
}

export default ControlledInput;
