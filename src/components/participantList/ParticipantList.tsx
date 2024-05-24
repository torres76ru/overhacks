import Container from "../UI/container/Container";
import ParticipantCard from "../paricipantCard/ParticipantCard";
import classes from "./ParticipantList.module.scss";
import prof_pict from "../../assets/img/profile-picture.png";

const paricipantTest = {
  id: "1",
  name: "Emma Watson",
  role: "Product Designer",
  expirience: "8 years",
  skills: "Adobe, AI, Motion",
  picture: prof_pict
};

const ParticipantList = () => {
  return (
    <div className={classes.container}>
      <Container>
        <h2>Participant list</h2>
        <ParticipantCard {...paricipantTest} />
      </Container>
    </div>
  );
};

export default ParticipantList;
