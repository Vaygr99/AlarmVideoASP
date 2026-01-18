import styles from "./BaseInput.module.css";

// Uncontrolled input element
function UncontrolledInput({
  placeholder = "",
  type = "text",
  className = "",
  inputRef,
}) {
  return (
    <input
      ref={inputRef}
      type={type}
      placeholder={placeholder}
      className={`${className} ${styles.container}`}
    />
  );
}

export default UncontrolledInput;
