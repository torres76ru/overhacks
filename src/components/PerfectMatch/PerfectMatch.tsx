import css from "./PerfectMatch.module.scss";

import Button from "../UI/button/Button";
import { useLocation } from "react-router";

const PerfectMatch = () => {
  const { profile } = useLocation().state;
  
  return (
    <div className={css.wrapper}>
      <div className={css.body}>
        <div>
          <h1>Perfect match!</h1>
          <p className={css.text}>
            You and <a href=''>{profile.telegramUserName}</a> have liked each
            other, and can now exchange Telegram links to communicate directly,
            or click on the name to view profile
          </p>
        </div>

        <div className={css.button} onClick={() => {
          window.Telegram.WebApp.openTelegramLink('https://t.me/' + profile.telegramUserName) 
        }}>
          <Button
            style={{ fontWeight: "500" }}
            variant={"green"}
            // to={userTelegramURL}
          >
            Telegram
          </Button>
        </div>
        <div className={css.button2}>
          <Button variant={"secondary"} to="/people">Skip</Button>
        </div>
      </div>
    </div>
  );
};

export default PerfectMatch;
