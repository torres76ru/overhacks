import css from "./HackathonDetailsCard.module.scss";
import clock_icon from "../../../assets/icons/clock.svg";
import location_icon from "../../../assets/icons/map_mark.svg";
import Button from "../../../components/UI/button/Button";
import { HackathonState } from "../../../types/types";

interface Props {
  hackathon: HackathonState;
}

const HackathonDetailsCard = ({ hackathon }: Props) => {
  return (
    <div className={css.container}>
      <div className={`${css.container__body}`}>
        <div className={`${css.prize_pool}`}>
          <p className={`${css.prize_pool__label}`}>Prize pool</p>
          <div className={`${css.prize_pool__price}`}>{hackathon.prize}</div>
        </div>
        <div className={`${css.time_location}`}>
          <div className={`${css.time_location__time}`}>
            <div className={`${css.time_location__icon}`}>
              <img src={clock_icon} alt="clock" />
            </div>
            <div className={`${css.time_location__text}`}>
              <p>Ongoing</p>
            </div>
          </div>
          <div className={`${css.time_location__location}`}>
            <div className={`${css.time_location__icon}`}>
              <img src={location_icon} alt="location" />
            </div>
            <div className={`${css.time_location__text}`}>
              <p>Brasil</p>
            </div>
          </div>
        </div>
        <div className={`${css.topics}`}>
          <div className={`${css.topics__label}`}>
            <p>Topics: </p>
          </div>
          <div className={`${css.topics__topics}`}>
            {hackathon.topics.map((topic) => (
              <div className={`${css.topics__topic}`}>{topic}</div>
            ))}
          </div>
        </div>
      </div>

      <div className={css.button}>
        <Button to={"registration"} variant="primary">
          Apply
        </Button>
      </div>
    </div>
  );
};

export default HackathonDetailsCard;
