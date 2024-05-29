import classes from "./CustomCheckBox.module.scss";

interface CheckBoxItem {
  name: string;
  label: string;
}

interface CustomCheckBoxProps {
  items: CheckBoxItem[];
  onChange: (selectedItems: { [key: string]: boolean }) => void;
  selectedItems: { [key: string]: boolean };
}

const CustomCheckBox = ({
  items,
  onChange,
  selectedItems
}: CustomCheckBoxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    const updatedCheckedItems = { ...selectedItems, [name]: checked };
    onChange(updatedCheckedItems);
  };

  return (
    <>
      {items.map((item) => (
        <label key={item.name} className={classes.container}>
          {item.label}
          <input
            type="checkbox"
            name={item.name}
            checked={selectedItems[item.name] || false}
            onChange={handleChange}
          />
          <span className={classes.checkmark}></span>
        </label>
      ))}
    </>
  );
};

export default CustomCheckBox;
