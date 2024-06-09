import css from "./UserProfile.module.scss";
import heart_icon from "../../assets/icons/heart.svg";
import next_icon from "../../assets/icons/arrow_pixel.svg";
import Container from "../UI/container/Container";
import ToggleButton from "../toggleButton/ToggleButton";
import { useState } from "react";
// import ProjectCard from "../ProjectCard/ProjectCard";

const data = {
  profile_img: "src/assets/img/profile-picture4.jpg",
  name: "Petra Molchanova",
  proffession: "Full-stack developer"
};
// const projects = [
//   {
//     id: 0,
//     name: "Pluton",
//     details:
//       "This blockchain-based P2P advertisement marketplace on the TON blockchain, integrated with Telegram",
//     preview: "http://localhost:5173/src/assets/img/proj1.png"
//   },
//   {
//     id: 1,
//     name: "Moon",
//     details:
//       "This blockchain-based P2P advertisement marketplace on the TON blockchain, integrated with Telegram",
//     preview: "http://localhost:5173/src/assets/img/proj2.jpg"
//   }
// ];
const UserProfile = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggleEvent = () => {
    setToggle(!toggle);
  };

  return (
    <div className={css.container}>
      <Container>
        <section className={css.header}>
          <div className={css.profile_img}>
            <img src={data.profile_img} alt="Profile Image" />
          </div>
          <h2 className={css.name}>{data.name}</h2>
          <h1 className={css.proffession}>{data.proffession}</h1>
          <div className={css.actions}>
            <div className={css.action}>
              <div className={css.action__img}>
                <img src={heart_icon} alt="be friend button" />
              </div>
              <div className={css.action__body}>
                <p>Invite to team</p>
              </div>
            </div>
            <div className={css.action}>
              <div className={css.action__img}>
                <img src={next_icon} alt="next arrow button" />
              </div>
              <div className={css.action__body}>
                <p>Next profile</p>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <section className={css.body}>
        <div className={css.spoiler_toggle}>
          <ToggleButton
            button1="About"
            button2="Builds"
            onClick={handleToggleEvent}
          />
        </div>
        {!toggle ? (
          <div className={css.details__text}>
            <div className={css.text_block}>
              <h3>BIO</h3>
              <p>
                Creative and detail-oriented Product Designer with over 8 years
                of experience in crafting user-centric digital products across
                various industries.
              </p>
            </div>
            <div className={css.text_block}>
              <h3>Projects</h3>
              <ul>
                <li>FlowTech Dashboard</li>
                <li>EcoEat App</li>
                <li>ArtisanConnect</li>
                <li>Bio Design</li>
              </ul>
            </div>
            <div className={css.text_block}>
              <h3>Skills</h3>
              <ul>
                <li>Motion</li>
                <li>Graphic design</li>
                <li>Adobe</li>
                <li>AI</li>
                <li>Color theory</li>
                <li>Typography</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className={css.details__project}>
            {/* <ProjectCard project={projects[0]} />
            <ProjectCard project={projects[1]} /> */}
          </div>
        )}
      </section>
    </div>
  );
};

export default UserProfile;
