import classes from "./HackatonCard.module.scss";
import hackaton_image from "../../assets/hackaton.jpg";
import Button from "../UI/button/Button";

interface Hackaton {
  id: string;
  name: string;
  prize_pool: string;
  curency: string;
  admin?: boolean;
}
interface Props {
  hackaton: Hackaton;
}

const HackatonCard = ({ hackaton }: Props) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__body}>
        <div className={classes.card__image}>
          <img src={hackaton_image} alt={hackaton.name} />
        </div>
        <div
          className={
            classes.card__info + " " + (hackaton.admin ? classes.admin : "")
          }
        >
          {hackaton.admin ? (
            <h3 className={classes.card__title}>{hackaton.name}</h3>
          ) : (
            <>
              <div className={classes.card__up}>
                <h3 className={classes.card__title}>{hackaton.name}</h3>
              </div>
              <div className={classes.card__down}>
                <h4 className={classes.card__subtitle}>Prize pool</h4>
                <span className={classes.card__prize_pool}>
                  {hackaton.prize_pool} {hackaton.curency}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {hackaton.admin ? (
        <div
          className={classes.card__actions}
          style={{ padding: "6px 6px 10px" }}
        >
          <div>
            <Button variant={"primary"} style={{ fontSize: "13px" }}>
              Statisics & Participant List
            </Button>
          </div>
          <div>
            <Button
              variant={"secondary"}
              style={{ fontSize: "13px", padding: "13px 28px 12px" }}
            >
              Edit
            </Button>
          </div>
        </div>
      ) : (
        <div className={classes.card__actions}>
          <a className={classes.card__button} href="#">
            Apply
          </a>
        </div>
      )}
    </div>
  );
};

export default HackatonCard;
