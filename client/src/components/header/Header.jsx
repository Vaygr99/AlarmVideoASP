import Logo from "./logo/Logo.jsx";
import Menu from "./menu/Menu.jsx";
import Mini from "./mini/Mini.jsx";

import styles from "./Header.module.css";

// Means <header> tag
function Header() {
  return (
    <header id="header" className={styles.container}>
      <Logo />
      <Menu />
      <Mini />
    </header>
  );
}

export default Header;
