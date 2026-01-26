import { useState } from "react";

import TextButton from "../../../../ui/buttons/textButton/TextButton.jsx";

import styles from "./OfferButtons.module.css";

// buttons at the bottom of offer list
function OfferButtons({ action }) {
  // offer operation error
  const [offerError, setOfferError] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {action === "create" ? (
          <TextButton text="Добавить" onClick={() => {}} />
        ) : (
          <span>Обновить</span>
        )}
      </div>
      {/* Error message */}
      {offerError &&
        (action === "create" ? (
          <p>Ошибка создания коммерческого предложения</p>
        ) : (
          <p>Ошибка обновления коммерческого предложения</p>
        ))}
    </div>
  );
}

export default OfferButtons;
