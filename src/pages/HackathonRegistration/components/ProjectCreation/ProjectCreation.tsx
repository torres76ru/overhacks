import React, { useState } from "react";
import Container from "../../../../components/UI/container/Container";
import ArrowBack from "../../../../components/UI/arrow-back/ArrowBack";
import css from "./ProjectCreation.module.scss";
import CustomInput from "../../../../components/UI/input/CustomInput";
import ImageInput from "../../../../components/UI/imageInput/ImageInput";
import Button from "../../../../components/UI/button/Button";
import CustomTextField from "../../../../components/UI/TextField/CustomTextField";

interface Props {
  onClick: (way: string) => void;
}

const ProjectCreation = ({ onClick }: Props) => {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    image: ""
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value
    }));
  };

  return (
    <div className={css.wrapper}>
      <ArrowBack />
      <Container>
        <div className={css.form}>
          <div className={css.inputs}>
            <div className={css.inputBlock}>
              <label>Name of your project</label>
              <CustomInput
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={css.inputBlock}>
              <label>Description</label>
              <CustomTextField
                name="description"
                value={formState.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={css.inputBlock}>
              <label>Logo of your project</label>
              <ImageInput />
            </div>
          </div>
          <div className={css.button}>
            <Button variant={"green"} onClick={() => onClick("success")}>
              Apply
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectCreation;
