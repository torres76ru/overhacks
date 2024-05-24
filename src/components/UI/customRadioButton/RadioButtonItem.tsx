import React, { InputHTMLAttributes } from "react";
import classes from "./RadioButtonItem.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioButtonItem = ({ label, checked, onChange, ...props }: Props) => {
  return (
    <div>
      <label className={classes.container}>
        {label}
        <input type="radio" checked={checked} onChange={onChange} {...props} />
        <span className={classes.checkmark}></span>
      </label>
    </div>
  );
};

export default RadioButtonItem;
