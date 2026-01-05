// base component for <header> tag

import Logo from "./logo/Logo.jsx";
import Menu from "./menu/Menu.jsx";
import Mini from "./mini/Mini.jsx";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <Logo />
      <Menu />
      <Mini />
    </header>
  );
}

export default Header;
