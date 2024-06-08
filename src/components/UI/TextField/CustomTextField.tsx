import { TextareaHTMLAttributes } from "react";
import classes from "./CustomTextField.module.scss";

const CustomTextField = ({
  value,
  onChange,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <div className={classes.textField}>
      <textarea {...props} value={value} onChange={onChange} />
    </div>
  );
};

export default CustomTextField;
