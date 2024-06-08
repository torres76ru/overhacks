import Button from "../../../../components/UI/button/Button";
import css from "./SuccessStep.module.scss";
import logo_icon from "../../../../assets/img/hackathon-register-logo.svg";

interface Props {
  onClick: (way: string) => void;
}

const SuccessStep = ({ onClick }: Props) => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={logo_icon} alt="" />
      </div>
      <div className={css.title}>
        <h1>Registered successfully!</h1>
      </div>
      <div className={css.share}>
        Share your idea or see hackathon details to start
      </div>
      <div className={css.button}>
        <Button onClick={() => onClick("team")} variant={"secondary"}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default SuccessStep;
