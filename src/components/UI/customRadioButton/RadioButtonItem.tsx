import classes from "./RadioButtonItem.module.scss";

interface RadioButtonItemProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "radio" | "checkbox";
}

const RadioButtonItem: React.FC<RadioButtonItemProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
  type
}) => (
  <div>
    <label className={classes.container}>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className={classes.checkmark}></span>
    </label>
  </div>
);
export default RadioButtonItem;
