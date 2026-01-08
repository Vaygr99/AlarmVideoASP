// Template for different button variants (square, circle etc.)
const BaseButton = function ({ children, className, ...props }) {
  return (
    <button
      className={className ?? ""}
      type={props?.buttonType ?? "button"}
      onClick={props?.onClick ?? null}
    >
      {children}
    </button>
  );
};

export default BaseButton;
