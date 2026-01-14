// Template for different button variants (square, circle etc.)
const BaseButton = function ({
  children,
  className = "",
  type = "button",
  onClick,
}) {
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
};

export default BaseButton;
