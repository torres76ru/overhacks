import { useState } from "react";
import css from "./People.module.scss";
import arrow_down from "../../assets/icons/chevron-down.svg";
import bg_video from "../../assets/gifs/user_home_bg.mp4";
import Container from "../../components/UI/container/Container";

import CustomCheckBox from "../../components/UI/checkBox/CustomCheckBox";
import Button from "../../components/UI/button/Button";
import UserProfile from "../../components/UserProfile/UserProfile";

const People = () => {
  const [specVisibility, setVisibility] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<{
    [key: string]: boolean;
  }>({
    online: false,
    ai: false,
    web3: false,
    gaming: false,
    dapps: false,
    defi: false,
    nft: false,
    security: false
  });

  const filterList = [
    { name: "online", label: "Online" },
    { name: "ai", label: "AI" },
    { name: "web3", label: "WEB3" },
    { name: "gaming", label: "Gaming" },
    { name: "dapps", label: "DApps" },
    { name: "defi", label: "DeFi" },
    { name: "nft", label: "NFT / Digital art" },
    { name: "security", label: "Security" }
  ];

  const handleCheckBoxChange = (updatedItems: { [key: string]: boolean }) => {
    setSelectedItems(updatedItems);
  };

  const toggleSpecVisibility = () => {
    setVisibility(!specVisibility);
  };
  const handleDelete = (item: string) => {
    setSelectedItems((prevItems) => ({
      ...prevItems,
      [item]: false
    }));
  };
  return (
    <div className={css.wrapper}>
      <div className={css.bg_vid}>
        <video className={css.video} autoPlay loop muted playsInline>
          <source src={bg_video} type="video/mp4" />
        </video>
      </div>
      <Container>
        <div className={css.exploreSpec} onClick={toggleSpecVisibility}>
          <span>Explore Specializations</span>
          <img src={arrow_down} alt="arrow down" />
          <div className={`${css.spoiler} ${specVisibility && css._active}`}>
            <CustomCheckBox
              items={filterList}
              onChange={handleCheckBoxChange}
              selectedItems={selectedItems}
            />
            <div className={css.spoiler__button}>
              <Button variant="green" onClick={toggleSpecVisibility}>
                Apply
              </Button>
            </div>
          </div>
        </div>
        <div className={css.selected}>
          {Object.entries(selectedItems).map(([key, value]) => {
            if (value) {
              return (
                <div key={key} className={css.selection_delete}>
                  {key}
                  <span
                    onClick={() => handleDelete(key)}
                    className={css.close_icon}
                  ></span>
                </div>
              );
            }
            return null;
          })}
        </div>
      </Container>
      <div className={css.people}>
        <UserProfile />
      </div>
    </div>
  );
};

export default People;
