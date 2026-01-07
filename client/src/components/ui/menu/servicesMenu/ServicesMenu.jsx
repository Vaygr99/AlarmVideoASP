import BaseLink from "../BaseLink.jsx";

import styles from "./ServicesMenu.module.css";

// Menu container from menu area (services)
function ServicesMenu() {
  const data = [
    { service: "Охоронна сигналiзацiя", link: "/burglar" },
    { service: "Пожежна сигналiзацiя", link: "/fire" },
    { service: "Вiдеонагляд", link: "/video" },
    { service: "Монтаж та налагодження", link: "/mount#adjustment" },
    { service: "Пiдтримка об'єктiв", link: "/mount#support" },
  ];
  return (
    // Services list
    <nav id="services-menu" className={styles.container}>
      {data.map((elem, index) => (
        <BaseLink key={index} to={elem.link}>
          <span>{elem.service}</span>
        </BaseLink>
      ))}
    </nav>
  );
}

export default ServicesMenu;
