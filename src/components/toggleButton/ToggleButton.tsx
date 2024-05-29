import React, { useState } from "react";
import css from "./ToggleButton.module.scss";

interface Props {
  button1: string;
  button2: string;
  onClick: () => void;
}
const ToggleButton = ({ button1, button2, onClick }: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const handleToggle = () => {
    setActive(!active);
    onClick();
  };

  return (
    <div className={`${css.container}`} onClick={handleToggle}>
      <div className={`${css.button} ${!active && css._active}`}>{button1}</div>
      <div className={`${css.button} ${active && css._active}`}>{button2}</div>
    </div>
  );
};

export default ToggleButton;
