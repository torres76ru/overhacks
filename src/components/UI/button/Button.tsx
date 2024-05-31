import { HTMLProps, ReactNode } from "react";
import classes from "./Button.module.scss";
import { Link } from "react-router-dom";

interface ButtonProps extends HTMLProps<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "green";
  to?: string;
}

const Button = ({
  children,
  variant = "primary",
  to,
  ...props
}: ButtonProps) => {
  return to ? (
    <Link to={to} className={`${classes.btn} ${classes[variant]}`}>
      {children}
    </Link>
  ) : (
    <a {...props} className={`${classes.btn} ${classes[variant]}`}>
      {children}
    </a>
  );
};

export default Button;
