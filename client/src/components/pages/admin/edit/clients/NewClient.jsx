import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add new client on edit page
function NewClient({ icons }) {
  return (
    <>
      {/* Add new client */}
      <div>
        <h3>Додати новий...</h3>
        {/* Client territory */}
        <div>
          <span>Объект:</span>
          <div>
            <span>
              <FontAwesomeIcon icon={icons.faF} />
            </span>
            <input placeholder="Назва об'єкту" />
            <button>
              <FontAwesomeIcon icon={icons.faTrashCan} />
            </button>
          </div>
        </div>
        {/* Client phone */}
        <div>
          <span>Телефон:</span>
          <div>
            <input />
            <button>
              <FontAwesomeIcon icon={icons.faTrashCan} />
            </button>
          </div>
        </div>
        {/* Useful info */}
        <div>
          <span>Инфо:</span>
          <div>
            <textarea placeholder="Iнформацiя"></textarea>
            <button>
              <FontAwesomeIcon icon={icons.faTrashCan} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewClient;
