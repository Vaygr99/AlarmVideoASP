import { v4 as uuidv4 } from "uuid";

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
      {data.map((elem) => (
        <BaseLink key={uuidv4()} to={elem.link}>
          <span>{elem.service}</span>
        </BaseLink>
      ))}
    </nav>
  );
}

export default ServicesMenu;
