import { InputHTMLAttributes } from "react";
import classes from "./ImageInputComponent.module.scss";
import chooseFileIcon from "../../../assets/icons/add_file.svg";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const ImageInputComponent = ({ ...props }: Props) => {
  return (
    <label className={classes["input-file"]}>
      <input type="file" name="file" accept="image/*" {...props} />
      <span>
        <img src={chooseFileIcon} alt="Выберите файл" />
      </span>
    </label>
  );
};

export default ImageInputComponent;
