import { IMaskInput } from "react-imask";

import SquareIconButton from "../../buttons/squareIconButton/SquareIconButton";

import styles from "./PhoneInput.module.css";

// Input for entering phone
function PhoneInput({ value, onChange, icon }) {
  return (
    <div className={styles.container}>
      <IMaskInput
        mask="+{38}(000)000-00-00"
        value={value}
        onAccept={onChange}
        placeholder="+38(___)___-__-__"
        type="tel"
      />
      <SquareIconButton icon={icon} />
    </div>
  );
}

export default PhoneInput;
