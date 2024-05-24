import { InputHTMLAttributes } from "react";
import classes from "./CustomInput.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "gradient";
}

const CustomInput = ({ variant, value, onChange, ...props }: Props) => {
  return (
    <div
      className={`${classes.inputField} ${
        variant == "gradient" && classes.gradient
      }`}
    >
      <input {...props} value={value} onChange={onChange} />
    </div>
  );
};

export default CustomInput;
