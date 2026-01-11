import { IMaskInput } from "react-imask";

function PhoneInput({ value, onChange }) {
  return (
    <IMaskInput
      mask="+{38}(000)000-00-00"
      value={value}
      onAccept={onChange}
      placeholder="+38(___)___-__-__"
      type="tel"
    />
  );
}

export default PhoneInput;
