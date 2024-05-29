import classes from "./ProjectCard.module.scss";
import Button from "../UI/button/Button";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  name: string;
  details: string;
  preview: string;
}
interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__body}>
        <div className={classes.card__image}>
          <img src={project.preview} alt={project.name} />
        </div>
        <div className={classes.card__info}>
          <div className={classes.card__up}>
            <h3 className={classes.card__title}>{project.name}</h3>
          </div>
          <div className={classes.card__down}>
            <p>{project.details}</p>
          </div>
        </div>
      </div>

      <div className={classes.card__actions}>
        <Link to={String(project.id)}>
          <Button variant={"secondary"} style={{ fontSize: "13px" }}>
            Apply
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
