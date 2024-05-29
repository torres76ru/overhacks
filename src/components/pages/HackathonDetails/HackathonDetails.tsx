import React, { useState } from "react";
import css from "./HackathonDetails.module.scss";
import Container from "../../UI/container/Container";
import HackathonDetailsCard from "./components/HackathonDetailsCard";
import ArrowBack from "../../UI/arrow-back/ArrowBack";
import ToggleButton from "../../toggleButton/ToggleButton";
import HackathonDetailsText from "./components/HackathonDetailsText";
import ProjectCard from "../../ProjectCard/ProjectCard";

const projects = [
  {
    id: 0,
    name: "Pluton",
    details:
      "This blockchain-based P2P advertisement marketplace on the TON blockchain, integrated with Telegram",
    preview: "http://localhost:5173/src/assets/img/proj1.png"
  },
  {
    id: 1,
    name: "Moon",
    details:
      "This blockchain-based P2P advertisement marketplace on the TON blockchain, integrated with Telegram",
    preview: "http://localhost:5173/src/assets/img/proj2.jpg"
  }
];

const HackathonDetails = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggleEvent = () => {
    setToggle(!toggle);
  };
  return (
    <div className={`${css.wrapper}`}>
      <ArrowBack />
      <Container>
        <h1 className={`${css.title}`}>Microsoft Hackathon</h1>
        <div className={`${css.card}`}>
          <HackathonDetailsCard />
        </div>
      </Container>
      <section className={css.details}>
        <div className={css.spoiler_toggle}>
          <ToggleButton
            button1="Details"
            button2="Projects"
            onClick={handleToggleEvent}
          />
        </div>
        {!toggle ? (
          <div className={css.details__text}>
            <HackathonDetailsText />
          </div>
        ) : (
          <div className={css.details__project}>
            <ProjectCard project={projects[0]} />
            <ProjectCard project={projects[1]} />
          </div>
        )}
      </section>
    </div>
  );
};

export default HackathonDetails;
