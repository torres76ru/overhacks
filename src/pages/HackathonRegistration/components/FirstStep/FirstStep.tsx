import css from "./FirstStep.module.scss";
import mesh_img from "../../../../assets/img/hackathon-registration-mesh.svg";
import logo_img from "../../../../assets/img/hackathon-register-logo.svg";
import Button from "../../../../components/UI/button/Button";
import { useState } from "react";
import arrow_down from "../../../../assets/icons/chevron-down.svg";
import CustomRadioButton from "../../../../components/UI/customRadioButton/CustomRadioButton";

const options = [
  { label: "FlowTech Dashboard", value: "option1" },
  { label: "EcoEat App", value: "option2" },
  { label: "Artisian connect", value: "option3" }
];
interface Props {
  onClick: (way: string) => void;
}

const FirstStep = ({ onClick }: Props) => {
  const [specVisibility, setVisibility] = useState<boolean>(false);
  const toggleSpecVisibility = () => {
    setVisibility(!specVisibility);
  };
  return (
    <div className={css.container}>
      <div className={css.mesh}>
        <img src={mesh_img} alt="" />
        <div className={css.logo}>
          <img src={logo_img} alt="" />
        </div>
      </div>
      <div className={css.title}>
        <h1>How would you like to register?</h1>
      </div>
      <div className={css.button}>
        <Button
          onClick={() => {
            onClick("hacker");
          }}
        >
          As a hacker
        </Button>
      </div>
      <div className={css.button}>
        <div className={css.exploreSpec} onClick={toggleSpecVisibility}>
          <span>Explore Specializations</span>
          <img src={arrow_down} alt="arrow down" />
          <div className={`${css.spoiler} ${specVisibility && css._active}`}>
            <div className={`${css.spoiler__body}`}>
              <CustomRadioButton options={options} allowMultiple={true} />
              <div className={css.spoiler__button}>
                <Button variant="secondary" onClick={toggleSpecVisibility}>
                  Select
                </Button>
              </div>
              <div className={css.spoiler__button}>
                <Button onClick={toggleSpecVisibility}>Create new one</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
