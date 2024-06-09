import logo from "../../assets/img/max-bill.jpg";
import Container from "../../components/UI/container/Container";
import css from "./ProfilePage.module.scss";
import video from "../../assets/gifs/sft_button.mp4";

const data = {
  profile_name: "Max Bill",
  profile_img: logo,
  profile_job: "Product Designer",
  profile_bio:
    "Creative and detail-oriented Product Designer with over 5 years of experience in crafting user-centric digital products across various industries.",
  profile_projects: ["FlowTech Dashboard", "EcoEat App", "ArtisanConnect"],
  skills: [
    "Motion",
    "Graphic design",
    "Adobe",
    "AI",
    "Color theory",
    "Typography"
  ]
};

const ProfilePage = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.bg_animated}>
        <video autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <Container>
        <div className={css.body}>
          <div className={css.profile_picture}>
            <img src={logo} alt="Profile picture" />
          </div>
          <div className={css.profile_info}>
            <h1>{data.profile_name}</h1>
            <h2>{data.profile_job}</h2>
          </div>
          <div className={css.profile_bio}>
            <div className={css.block_label}>BIO</div>
            <div className={css.block_text}>{data.profile_bio}</div>
          </div>
          <div className={css.profile_projects}>
            <div className={css.block_label}>Projects</div>
            <div className={css.block_text}>
              <ul>
                {data.profile_projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={css.profile_skils}>
            <div className={css.block_label}>Skills</div>
            <div className={css.block_skills}>
              {data.skills.map((skill, index) => (
                <div className={css.skill} key={index}>
                  {skill}
                </div>
              ))}
              <div className={`${css.skill} ${css.plus}`}></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;
