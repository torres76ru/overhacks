import React, { useState } from "react";
import RadioButtonItem from "./RadioButtonItem";
import classes from "./CustomRadioButton.module.scss";

interface RadioOption {
  label: string;
  value: string;
}

interface CustomRadioButtonProps {
  options: RadioOption[];
  allowMultiple?: boolean;
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  options,
  allowMultiple = false
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (allowMultiple) {
      setSelectedOptions((prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value]
      );
    } else {
      setSelectedOptions([value]);
    }
  };

  return (
    <div className={classes.container}>
      {options.map((option) => (
        <RadioButtonItem
          key={option.value}
          label={option.label}
          name="options"
          value={option.value}
          checked={selectedOptions.includes(option.value)}
          onChange={handleRadioChange}
          type={allowMultiple ? "checkbox" : "radio"}
        />
      ))}
    </div>
  );
};

export default CustomRadioButton;
