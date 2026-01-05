import { Link } from "react-router-dom";

import logo from "../../../../assets/images/logo.svg";

function Title() {
  return (
    <Link to="/">
      <div>
        <img alt={logo} src={logo} />
      </div>
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
