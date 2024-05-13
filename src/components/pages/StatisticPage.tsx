import classes from "./StatisticPage.module.scss";
import arrow_icon from "../../assets/icons/arrow.svg";
import Container from "../UI/container/Container";

const StatisticPage = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.heading}>
          <div className={classes.arrow}>
            <img src={arrow_icon} alt="go back" />
          </div>
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
        <div className={classes.diagram}>
          <Container>
            <div className={classes.panel}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={classes.list}>
              <table>
                <tr>
                  <td className={classes.mark}>
                    <div></div>
                  </td>
                  <td className={classes.count}>
                    <span>90</span>
                  </td>
                  <td className={classes.item}>Developers</td>
                </tr>
                <tr>
                  <td className={classes.mark}>
                    <div></div>
                  </td>
                  <td className={classes.count}>60</td>
                  <td className={classes.item}>Designers</td>
                </tr>
                <tr>
                  <td className={classes.mark}>
                    <div></div>
                  </td>
                  <td className={classes.count}>30</td>
                  <td className={classes.item}>Project Managers</td>
                </tr>
                <tr>
                  <td className={classes.mark}>
                    <div></div>
                  </td>
                  <td className={classes.count}>20</td>
                  <td className={classes.item}>Analysts</td>
                </tr>
              </table>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
