import css from "./UserProfile.module.scss";
import heart_icon from "../../assets/icons/heart.svg";
import next_icon from "../../assets/icons/arrow_pixel.svg";
import Container from "../UI/container/Container";
import ToggleButton from "../toggleButton/ToggleButton";
import { useState } from "react";
// import ProjectCard from "../ProjectCard/ProjectCard";
import { useNextProfile } from "../../api";

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
const photoUrls = [
  "https://storage.googleapis.com/overhacks-resources/prt10.png",
  "https://storage.googleapis.com/overhacks-resources/prt9.png",
  "https://storage.googleapis.com/overhacks-resources/prt7.png",
  "https://storage.googleapis.com/overhacks-resources/prt8.png",
  "https://storage.googleapis.com/overhacks-resources/prt5.png",
  "https://storage.googleapis.com/overhacks-resources/prt6.png",
  "https://storage.googleapis.com/overhacks-resources/prt4.png",
  "https://storage.googleapis.com/overhacks-resources/prt2.png",
  "https://storage.googleapis.com/overhacks-resources/prt1.png",
  "https://storage.googleapis.com/overhacks-resources/prt3.png"
];

const UserProfile = () => {
  const { data: profileData, refetch: nextProfile, isLoading } = useNextProfile();
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggleEvent = () => {
    setToggle(!toggle);
  };
  const [photo, setPhoto] = useState<string>(photoUrls[0]);
  
  const chooseRandomPhoto = () => {
    let currentPhoto = photo;
    while (currentPhoto === null || currentPhoto === photo) {
      currentPhoto = photoUrls[Math.floor(Math.random() * (photoUrls.length - 1))];
    }
    return currentPhoto;
  }
  
  const fetchNextProfile = async () => {
    await nextProfile();
    setPhoto(chooseRandomPhoto());
  }

  return (
    <div className={css.container}>
      <Container>
        
        <section className={css.header}>
          <div className={css.profile_img}>
            <img src={photo} alt="Profile Image" />
          </div>
          <h2 className={css.name}>{profileData?.nickname}</h2>
          <h1 className={css.proffession}>{profileData?.roles?.[0]?.name}</h1>
          <div className={css.actions}>
            <div className={css.action}>
              <div className={css.action__img}>
                <img src={heart_icon} alt="be friend button" />
              </div>
              <div className={css.action__body}>
                <p>Invite to team</p>
              </div>
            </div>
            <div className={css.action} onClick={fetchNextProfile}>
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
                { profileData?.about || 'There is no bio for this profile :(' }
              </p>
            </div>
            <div className={css.text_block}>
              <h3>Projects</h3>
              <ul>
                {profileData?.projects?.map((project) => (<li>{project}</li>))}
              </ul>
            </div>
            <div className={css.text_block}>
              <h3>Skills</h3>
              <ul>
                {profileData?.skills?.map((skill) => (<li>{skill.name}</li>))}
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
