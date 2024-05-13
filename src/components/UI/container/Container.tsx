import React from "react";
import classes from "./Container.module.scss";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Container;
