import React from "react";
import classes from "./CustomCheckBox.module.scss";

const CustomCheckBox = () => {
  const [checkedItems, setCheckedItems] = React.useState({
    ai: false,
    crypto: false,
    web3: false,
    games: false,
    socialBot: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked
    }));
  };

  return (
    <>
      <label className={classes.container}>
        Ai
        <input
          type="checkbox"
          name="ai"
          checked={checkedItems.ai}
          onChange={handleChange}
        />
        <span className={classes.checkmark}></span>
      </label>
      <label className={classes.container}>
        Crypto
        <input
          type="checkbox"
          name="crypto"
          checked={checkedItems.crypto}
          onChange={handleChange}
        />
        <span className={classes.checkmark}></span>
      </label>
      <label className={classes.container}>
        Web3
        <input
          type="checkbox"
          name="web3"
          checked={checkedItems.web3}
          onChange={handleChange}
        />
        <span className={classes.checkmark}></span>
      </label>
      <label className={classes.container}>
        Games
        <input
          type="checkbox"
          name="games"
          checked={checkedItems.games}
          onChange={handleChange}
        />
        <span className={classes.checkmark}></span>
      </label>
      <label className={classes.container}>
        Social bot
        <input
          type="checkbox"
          name="socialBot"
          checked={checkedItems.socialBot}
          onChange={handleChange}
        />
        <span className={classes.checkmark}></span>
      </label>
    </>
  );
};

export default CustomCheckBox;
