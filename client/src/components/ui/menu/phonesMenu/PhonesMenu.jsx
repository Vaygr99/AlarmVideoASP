import BaseLink from "../BaseLink.jsx";

// Menu container from mini area (phones)
function PhonesMenu() {
  const data = [
    { service: "Консультацiї (усi питання)", phone: "+38(099)796-34-13" },
    { service: "Тех. пiдтримка (вiдео)", phone: "+38(099)723-71-28" },
  ];

  return (
    // Phones list
    <nav id="phones-menu">
      {data.map((elem, index) => (
        <BaseLink key={index} to={`tel:${elem.phone}`}>
          <span>
            {elem.service}
            <br />
            <span>{elem.phone}</span>
          </span>
        </BaseLink>
      ))}
    </nav>
  );
}

export default PhonesMenu;
