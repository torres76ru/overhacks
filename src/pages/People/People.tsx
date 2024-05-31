import { useState } from "react";
import css from "./People.module.scss";
import arrow_down from "../../assets/icons/chevron-down.svg";
import bg_video from "../../assets/gifs/user_home_bg.mp4";
import Container from "../../components/UI/container/Container";
import Search from "../../components/search/Search";
import CustomCheckBox from "../../components/UI/checkBox/CustomCheckBox";
import Button from "../../components/UI/button/Button";
import ParticipantCard from "../../components/paricipantCard/ParticipantCard";

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
    { name: "security", label: "Security" },
    { name: "security", label: "Security" }
  ];
  const paricipantList = [
    {
      id: "1",
      name: "Petra Molchanova",
      role: "Full-stack developer",
      expirience: "3 years",
      skills: "JavaScript, PostgreSQL",
      picture: "src/assets/img/profile-picture.png"
    },
    {
      id: "2",
      name: "Emma Watson",
      role: "Product Designer",
      expirience: "8 years",
      skills: "Adobe, AI, Motion",
      picture: "src/assets/img/profile-picture.png"
    }
  ];

  const handleCheckBoxChange = (updatedItems: { [key: string]: boolean }) => {
    setSelectedItems(updatedItems);
  };

  const toggleSpecVisibility = () => {
    setVisibility(!specVisibility);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.bg_vid}>
        <video className={css.video} autoPlay loop muted playsInline>
          <source src={bg_video} type="video/mp4" />
        </video>
      </div>
      <Container>
        <Search />
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
        <div className={css.people}>
          {paricipantList.map((person) => (
            <ParticipantCard {...person} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default People;
