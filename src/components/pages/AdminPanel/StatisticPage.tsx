import classes from "./StatisticPage.module.scss";
import Container from "../../UI/container/Container";
import ArrowBack from "../../UI/arrow-back/ArrowBack";
import DeveloperDistribution from "../../developerDistribution/DeveloperDistribution";
import RegistrationFrequency from "../../registrationFrequency/RegistrationFrequency";
import ParticipantList from "../../participantList/ParticipantList";

const StatisticPage = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <ArrowBack />
        <div className={classes.heading}>
          <div className={classes.title}>
            <h1>AIBC World Hackathon</h1>
          </div>
        </div>
        <Container>
          <div className={classes.statistic}>
            <div className={classes.title}>Statistic</div>
            <div className={classes.row}>
              <div className={classes.col}>
                <h2>150</h2>
                <h3>Participants</h3>
              </div>
              <div className={classes.col}>
                <h2>35</h2>
                <h3>Projects</h3>
              </div>
            </div>
          </div>
        </Container>
        <DeveloperDistribution />
        <RegistrationFrequency />
        <ParticipantList />
      </div>
    </>
  );
};

export default StatisticPage;
