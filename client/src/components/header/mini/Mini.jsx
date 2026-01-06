import Admin from "./admin/Admin.jsx";
import Phone from "./phone/Phone.jsx";
import Theme from "./Theme.jsx";
import Lang from "./lang/Lang.jsx";

function Mini() {
  return (
    <div>
      <Lang />
      <Theme />
      <Phone />
      <Admin />
    </div>
  );
}

export default Mini;
