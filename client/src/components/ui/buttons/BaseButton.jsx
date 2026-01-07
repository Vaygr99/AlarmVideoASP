// Template for different button variants (square, circle etc.)
const BaseButton = function ({ children, className }) {
  return <button className={className ?? ""}>{children}</button>;
};

export default BaseButton;
