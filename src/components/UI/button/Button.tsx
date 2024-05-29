import { HTMLProps, ReactNode } from "react";
import classes from "./Button.module.scss";

interface ButtonProps extends HTMLProps<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "green";
}

const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
  return (
    <a {...props} className={`${classes.btn} ${classes[variant]}`}>
      {children}
    </a>
  );
};

export default Button;
