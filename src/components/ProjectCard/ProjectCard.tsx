import classes from "./ProjectCard.module.scss";
import Button from "../UI/button/Button";
import { Link } from "react-router-dom";
import { ProjectState } from "../../types/types";
import { truncateText } from "../../utils";

interface Props {
  project: ProjectState;
  link?: string;
}

const ProjectCard = ({ project, link }: Props) => {
  const truncatedDescription = project.description
    ? truncateText(project.description, 30)
    : null;
  console.log(project);
  return (
    <div className={classes.card}>
      <div className={classes.card__body}>
        <div className={classes.card__image}>
          <img
            src={
              "https://www.nojitter.com/sites/default/files/IT_Project_AdobeStock_199241005_4721_0.jpeg"
            }
            alt={project.name}
          />
        </div>
        <div className={classes.card__info}>
          <div className={classes.card__up}>
            <h3 className={classes.card__title}>{project.name}</h3>
          </div>
          <div className={classes.card__down}>
            <p>{truncatedDescription}</p>
          </div>
        </div>
      </div>

      <div className={classes.card__actions}>
        <Link to={link ? link : "project/" + String(project._id)}>
          <Button variant={"secondary"} style={{ fontSize: "13px" }}>
            Join
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
