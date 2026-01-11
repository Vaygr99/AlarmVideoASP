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
      {...props}
      type={type}
      placeholder={placeholder}
      className={`${className} ${styles.container}`}
    />
  );
}

export default BaseInput;
