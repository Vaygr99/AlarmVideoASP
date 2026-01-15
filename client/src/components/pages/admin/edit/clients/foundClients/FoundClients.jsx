import Client from "../client/Client.jsx";

import styles from "./FoundClients.module.css";

// Filter clients by current name
function FoundClients({ data, inputName = "", icon, ...props }) {
  // data - loaded data from server
  // clientName - entered client name

  // filter clients by current client name
  const list =
    inputName && data?.clients
      ? data.clients.filter((elem) =>
          elem.name.toLowerCase().includes(inputName.toLowerCase())
        )
      : [];

  // if not found
  if (!list.length) {
    return <h2>- Не знайдено -</h2>;
  }

  return (
    <div className={styles.container}>
      <h2>Знайдено: {list.length}</h2>
      {list.map((elem, index) => (
        <Client {...props} key={index} client={elem} icon={icon} />
      ))}
    </div>
  );
}

export default FoundClients;
