import css from "./Header.module.scss";
import logo from "../../assets/icons/overhacks.svg";
import question_mark from "../../assets/icons/question-mark.svg";
import TonConnectButton from "../TonConnectButton/TonConnectButton";

const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.header_body}>
        <div className={css.header_left}>
          <div className={css.header_logo}>
            <img src={logo} alt="overhacks icon" />
          </div>
          <div className={css.header_xp}>300 overXP</div>
        </div>
        <div className={css.header_right}>
          <div className={css.header_question}>
            <img src={question_mark} alt="overhacks icon" />
          </div>
          <div className={css.header_ton_connect}>
            <TonConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
