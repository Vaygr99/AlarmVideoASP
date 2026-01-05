// base component for <header> tag

import Logo from "./logo/Logo.jsx";
import Menu from "./menu/Menu.jsx";
import Mini from "./mini/Mini.jsx";

function Header() {
  return (
    <header>
      <Logo />
      <Menu />
      <Mini />
    </header>
  );
}

export default Header;
