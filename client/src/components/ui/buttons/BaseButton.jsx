// Template for different button variants (square, circle etc.)
const BaseButton = function ({
  children,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button {...props} className={className} type={type}>
      {children}
    </button>
  );
};

export default BaseButton;
