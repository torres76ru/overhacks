import classes from "./ParicipantCard.module.scss";
import Button from "../UI/button/Button";

interface Props {
  id: string;
  name: string;
  role: string;
  expirience: string;
  skills: string;
  picture: string;
}

const ParticipantCard = (props: Props) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__body}>
        <div className={classes.card__image}>
          <img src={props.picture} alt={props.name} />
        </div>
        <div className={classes.card__info}>
          <div className={classes.card__up}>
            <h3 className={classes.card__name}>{props.name}</h3>
          </div>
          <div className={classes.card__down}>
            <p className={classes.card__p1}>
              <span>Role:</span> {props.role}
            </p>
            <p className={classes.card__p2}>
              <span>Expirience:</span> {props.expirience}
            </p>
            <p className={classes.card__p2}>
              <span>Skills:</span> {props.skills}
            </p>
          </div>
        </div>
      </div>
      <div className={classes.card__actions}>
        <Button variant={"secondary"}>Profile</Button>
      </div>
    </div>
  );
};

export default ParticipantCard;
