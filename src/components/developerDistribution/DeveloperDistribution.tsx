import React from "react";
import Container from "../UI/container/Container";
import classes from "./DeveloperDistribution.module.scss";

const DeveloperDistribution = () => {
  return (
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
  );
};

export default DeveloperDistribution;
