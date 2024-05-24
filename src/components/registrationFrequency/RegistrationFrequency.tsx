import Container from "../UI/container/Container";
import classes from "./RegistrationFrequency.module.scss";

const RegistrationFrequency = () => {
  return (
    <div className={classes.container}>
      <Container>
        <h2 className={classes.title}>Daily registration frequency</h2>
        <div className={classes.chart}>
          <div className={classes.chart_y}>
            <span>40</span>
            <span>30</span>
            <span>20</span>
          </div>
          <div className={classes.chart_x}>
            <span>Jul 6</span>
            <span>12</span>
            <span>16</span>
            <span>24</span>
          </div>
          <div className={classes.chart_body}>
            <span className={classes.bar} style={{ height: "10%" }}></span>
            <span className={classes.bar} style={{ height: "10%" }}></span>
            <span className={classes.bar} style={{ height: "20%" }}></span>
            <span className={classes.bar} style={{ height: "30%" }}></span>
            <span className={classes.bar} style={{ height: "50%" }}></span>
            <span className={classes.bar} style={{ height: "70%" }}></span>
            <span className={classes.bar} style={{ height: "80%" }}></span>
            <span className={classes.bar} style={{ height: "70%" }}></span>
            <span className={classes.bar} style={{ height: "50%" }}></span>
            <span className={classes.bar} style={{ height: "30%" }}></span>
            <span className={classes.bar} style={{ height: "20%" }}></span>
            <span className={classes.bar} style={{ height: "20%" }}></span>
            <span className={classes.bar} style={{ height: "20%" }}></span>
            <span className={classes.bar} style={{ height: "30%" }}></span>
            <span className={classes.bar} style={{ height: "30%" }}></span>
            <span className={classes.bar} style={{ height: "30%" }}></span>
            <span className={classes.bar} style={{ height: "50%" }}></span>
            <span className={classes.bar} style={{ height: "70%" }}></span>
            <span className={classes.bar} style={{ height: "100%" }}></span>
          </div>
          <div className={classes.chart_empty}></div>
        </div>
      </Container>
      <hr />
    </div>
  );
};

export default RegistrationFrequency;
