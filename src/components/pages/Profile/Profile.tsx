import React from "react";
import css from "./Profile.module.scss";
import heart_icon from "../../../assets/icons/heart.svg";
import next_icon from "../../../assets/icons/arrow_pixel.svg";
import ArrowBack from "../../UI/arrow-back/ArrowBack";
import Container from "../../UI/container/Container";

const data = {
  profile_img: "src/assets/img/profile-picture4.jpg",
  name: "Petra Molchanova",
  proffession: "Full-stack developer"
};
const Profile = () => {
  return (
    <div>
      <ArrowBack />
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
        <div className={css.spoiler_toggles}>
          <div>s</div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
