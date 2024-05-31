import css from "./HackerStep.module.scss";
import bounds from "../../../../assets/img/cool-bounds-profile.svg";
import Button from "../../../../components/UI/button/Button";

interface Hacker {
  id: string;
  name: string;
  role: string;
  expirience: string;
  skills: string;
  picture: string;
}
interface Props {
  hacker: Hacker;
  onClick: (way: string) => void;
}

const HackerStep = ({ hacker, onClick }: Props) => {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <img className={css.bounds} src={bounds} alt="" />
        <div className={css.card__body}>
          <div className={css.card__image}>
            <img src={hacker.picture} alt={hacker.name} />
          </div>
          <div className={css.card__info}>
            <div className={css.card__up}>
              <h3 className={css.card__name}>{hacker.name}</h3>
            </div>
            <div className={css.card__down}>
              <p className={css.card__p1}>
                <span>Role:</span> {hacker.role}
              </p>
              <p className={css.card__p2}>
                <span>Expirience:</span> {hacker.expirience}
              </p>
              <p className={css.card__p2}>
                <span>Skills:</span> {hacker.skills}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={css.title}>
        <h1>Do you want to register using your profile details?</h1>
      </div>
      <div className={css.button}>
        <Button onClick={() => onClick("success")}>Yes</Button>
      </div>
      <div className={css.button}>
        <Button variant={"secondary"}>Update</Button>
      </div>
    </div>
  );
};

export default HackerStep;
