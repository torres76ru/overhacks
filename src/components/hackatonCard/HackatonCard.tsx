import React from "react";
import classes from "./HackatonCard.module.scss";
import hackaton_image from "../../assets/hackaton.jpg";

interface Hackaton {
  id: string;
  name: string;
  prize_pool: string;
  curency: string;
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
        <div className={classes.card__info}>
          <div className={classes.card__up}>
            <h3 className={classes.card__title}>{hackaton.name}</h3>
          </div>
          <div className={classes.card__down}>
            <h4 className={classes.card__subtitle}>Prize pool</h4>
            <span className={classes.card__prize_pool}>
              {hackaton.prize_pool} {hackaton.curency}
            </span>
          </div>
        </div>
      </div>
      <div className={classes.card__actions}>
        <a className={classes.card__button} href="#">
          Apply
        </a>
      </div>
    </div>
  );
};

export default HackatonCard;
