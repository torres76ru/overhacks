import { useState } from "react";
import CustomTextField from "../../UI/TextField/CustomTextField";
import ArrowBack from "../../UI/arrow-back/ArrowBack";
import CustomCheckBox from "../../UI/checkBox/CustomCheckBox";
import Container from "../../UI/container/Container";
import CustomInput from "../../UI/input/CustomInput";
import classes from "./EditPage.module.scss";
import CustomRadioButton from "../../UI/customRadioButton/CustomRadioButton";
import ImageInput from "../../UI/imageInput/ImageInput";
import Button from "../../UI/button/Button";

const EditPage = () => {
  const [formState, setFormState] = useState({
    eventName: "",
    eventDesription: "",
    other: "",
    prizepool: "",
    dateStart: "2024-02-05",
    dateEnd: "2024-03-05",
    sponsorName: "",
    chatLink: ""
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value
    }));
  };

  return (
    <div className={classes.wrapper}>
      <ArrowBack />
      <Container>
        <div style={{ padding: "25px 0 16px" }}>
          <div className={classes.inputBlock}>
            <label>Write the name of the event here</label>
            <CustomInput
              variant="gradient"
              name="eventName"
              value={formState.eventName}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.inputBlock}>
            <label>Write event description here</label>
            <CustomTextField />
          </div>
          <div className={classes.inputBlock}>
            <label>Add topic(s) of the event</label>
            <CustomCheckBox />
          </div>
          <div className={classes.inputBlock}>
            <CustomInput
              placeholder={"Other"}
              name="other"
              value={formState.other}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.inputBlock}>
            <label>
              Add prizepool amount in numbers
              <br />
              If no, write "No"
              <br />
              If to be anonced, write "TBA"
            </label>
            <CustomInput
              name="prizepool"
              value={formState.prizepool}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.inputBlock}>
            <label>Starting Date</label>
            <CustomInput
              type="date"
              name="dateStart"
              value={formState.dateStart}
              onChange={handleInputChange}
              min="2024-01-01"
              max="2024-12-31"
            />
          </div>
          <div className={classes.inputBlock}>
            <label>Ending Date</label>
            <CustomInput
              type="date"
              name="dateEnd"
              value={formState.dateEnd}
              onChange={handleInputChange}
              min="2024-01-01"
              max="2024-12-31"
            />
          </div>
          <div className={classes.inputBlock}>
            <label>Choose format of the event</label>
            <CustomRadioButton />
          </div>
          <div className={classes.inputBlock}>
            <label>Add sponsor(s) names</label>
            <CustomInput
              name="sponsorName"
              value={formState.sponsorName}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.inputBlock}>
            <label>Add chat link</label>
            <CustomInput
              name="chatLink"
              value={formState.chatLink}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.inputBlock}>
            <label>Add picture of the event</label>
            <ImageInput />
          </div>
          <Button>Create event</Button>
        </div>
      </Container>
    </div>
  );
};

export default EditPage;
