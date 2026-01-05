import { Link } from "react-router-dom";

function Title() {
  return (
    <Link to="/">
      <div></div>
      <section>
        <p>
          ФОП Пiлецький О.С.
          <br />
          <span>Безпека та Вiдео</span>
        </p>
      </section>
    </Link>
  );
}

export default Title;
