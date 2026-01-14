import styles from "./BaseInput.module.css";

// Controlled input element
function ControlledInput({
  placeholder = "",
  type = "text",
  className = "",
  value,
  onChange,
}) {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      className={`${className} ${styles.container}`}
      onChange={onChange}
    />
  );
}

export default ControlledInput;
