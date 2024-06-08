import { useState } from "react";
import css from "./ProjectPage.module.scss";

import ArrowBack from "../../components/UI/arrow-back/ArrowBack";
import Container from "../../components/UI/container/Container";
import ToggleButton from "../../components/toggleButton/ToggleButton";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ParticipantCard from "../../components/paricipantCard/ParticipantCard";

const data = {
  id: 0,
  name: "Pluton",
  details:
    "This blockchain-based P2P advertisement marketplace on the TON blockchain, integrated with Telegram",
  preview: "http://localhost:5173/src/assets/img/proj1.png"
};

const paricipantList = [
  {
    id: "1",
    name: "Petra Molchanova",
    role: "Full-stack developer",
    expirience: "3 years",
    skills: "JavaScript, PostgreSQL",
    picture: "/src/assets/img/profile-picture.png"
  },
  {
    id: "2",
    name: "Emma Watson",
    role: "Product Designer",
    expirience: "8 years",
    skills: "Adobe, AI, Motion",
    picture: "/src/assets/img/profile-picture.png"
  }
];

const ProjectPage = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggleEvent = () => {
    setToggle(!toggle);
  };
  return (
    <div className={`${css.wrapper}`}>
      <ArrowBack />
      <Container>
        <h1 className={`${css.title}`}>Pluton</h1>
        <div className={`${css.card}`}>
          <ProjectCard project={data} />
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
            <p>
              In Q2 2024, we're thrilled to introduce the "One BNB – Coding the
              Future" hackathon, setting the stage for yet another exciting
              chapter in the evolution of blockchain technology!
            </p>
            <p>
              The inception of opBNB and BNB Greenfield in 2023 marked the
              commencement of the “One BNB” multi-chain journey, accompanied by
              a wealth of ideas and feedback from the vibrant BNB Chain
              community. This theme now serves as the bedrock of our hackathon,
              reflecting BNB Chain's ongoing pursuit of pioneering blockchain
              solutions.
            </p>
            <p>
              In addition to offering our thanks to our annual sponsors –
              Polyhedra Network, Dora Factory, DEGO Finance, TUSD, Sonorus and
              THENA – we also welcome new sponsors for this quarter: Baby Doge
              and Holoworld AI.
            </p>
            <p>
              The BNB Chain 2024 Hackathon is your golden ticket to dive
              headfirst into the exhilarating realm of decentralized
              applications, where your ideas can spark tangible real-world
              transformations.🌟:
            </p>
          </div>
        ) : (
          <div className={css.details__project}>
            {paricipantList.map((person) => (
              <ParticipantCard {...person} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ProjectPage;
