import { HTMLProps, ReactNode } from "react";
import classes from "./Button.module.scss";

interface ButtonProps extends HTMLProps<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
  const buttonClass =
    variant === "primary" ? classes.primary : classes.secondary;

  return (
    <a {...props} className={`${classes.btn} ${buttonClass}`}>
      {children}
    </a>
  );
};

export default Button;
