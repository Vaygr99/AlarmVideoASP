import BaseLink from "../BaseLink.jsx";

import styles from "./LogoMenu.module.css";

// Menu container from logo area (services + other)
function LogoMenu() {
  const services = [
    { service: "Охоронна сигналiзацiя", link: "/burglar" },
    { service: "Пожежна сигналiзацiя", link: "/fire" },
    { service: "Вiдеонагляд", link: "/video" },
    { service: "Монтаж та налагодження", link: "/mount#adjustment" },
    { service: "Пiдтримка об'єктiв", link: "/mount#support" },
  ];
  const different = [{ text: "Про нас", link: "/about" }];

  return (
    <div id="logo-menu" className={styles.container}>
      <div>
        {/* services list */}
        <nav>
          {services.map((elem, index) => (
            <BaseLink key={index} to={elem.link}>
              <span>{elem.service}</span>
            </BaseLink>
          ))}
        </nav>
      </div>
      <div>
        {/* list of differents */}
        <nav>
          {different.map((elem, index) => (
            <BaseLink key={index} link={elem.link}>
              <span>{elem.text}</span>
            </BaseLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default LogoMenu;
