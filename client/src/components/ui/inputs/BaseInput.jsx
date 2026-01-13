import styles from "./BaseInput.module.css";

// Basic input element
function BaseInput({
  placeholder = "",
  type = "text",
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${className} ${styles.container}`}
      onChange={(e) => props.setState(e.target.value)}
    />
  );
}

export default BaseInput;
