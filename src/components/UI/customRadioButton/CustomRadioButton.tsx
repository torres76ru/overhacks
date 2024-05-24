import React, { useState } from "react";
import RadioButtonItem from "./RadioButtonItem";
import classes from "./CustomRadioButton.module.scss";

const CustomRadioButton = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={classes.container}>
      <RadioButtonItem
        label="On-line"
        name="options"
        value="option1"
        checked={selectedOption === "option1"}
        onChange={handleRadioChange}
      />
      <RadioButtonItem
        label="On-site"
        name="options"
        value="option2"
        checked={selectedOption === "option2"}
        onChange={handleRadioChange}
      />
      <RadioButtonItem
        label="Hybrid"
        name="options"
        value="option3"
        checked={selectedOption === "option3"}
        onChange={handleRadioChange}
      />
    </div>
  );
};

export default CustomRadioButton;
