import css from "./PerfectMatch.module.scss";

import Button from "../UI/button/Button";

const PerfectMatch = () => {
  const userName = "Emma Watson";
  const userTelegramURL = "#";
  return (
    <div className={css.wrapper}>
      <div className={css.body}>
        <div>
          <h1>Perfect match!</h1>
          <p className={css.text}>
            You and <a href={userTelegramURL}>{userName}</a> have liked each
            other, and can now exchange Telegram links to communicate directly,
            or click on the name to view profile
          </p>
        </div>

        <div className={css.button}>
          <Button
            style={{ fontWeight: "500" }}
            variant={"green"}
            to={userTelegramURL}
            onClick={() => {}}
          >
            TelegramLink
          </Button>
        </div>
        <div className={css.button2}>
          <Button variant={"secondary"}>Skip</Button>
        </div>
      </div>
    </div>
  );
};

export default PerfectMatch;
