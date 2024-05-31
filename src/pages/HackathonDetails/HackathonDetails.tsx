import { useState } from "react";
import css from "./HackathonDetails.module.scss";

import HackathonDetailsCard from "./components/HackathonDetailsCard";
import HackathonDetailsText from "./components/HackathonDetailsText";
import ArrowBack from "../../components/UI/arrow-back/ArrowBack";
import Container from "../../components/UI/container/Container";
import ToggleButton from "../../components/toggleButton/ToggleButton";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

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
