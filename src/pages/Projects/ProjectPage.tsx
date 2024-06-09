import { useEffect, useState } from "react";
import css from "./ProjectPage.module.scss";

import ArrowBack from "../../components/UI/arrow-back/ArrowBack";
import Container from "../../components/UI/container/Container";
import ToggleButton from "../../components/toggleButton/ToggleButton";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ParticipantCard from "../../components/paricipantCard/ParticipantCard";
import { ProjectState } from "../../types/types";
import { useParams } from "react-router-dom";
import { fetchProject } from "../../actions/projects";

const paricipantList = [
  {
    id: "1",
    name: "Petra Molchanova",
    role: "Full-stack developer",
    expirience: "3 years",
    skills: "JavaScript, PostgreSQL",
    picture: "/src/assets/img/profile-picture.png"
  },
  {
    id: "2",
    name: "Emma Watson",
    role: "Product Designer",
    expirience: "8 years",
    skills: "Adobe, AI, Motion",
    picture: "/src/assets/img/profile-picture.png"
  }
];

const ProjectPage = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [project, setProject] = useState<ProjectState>();
  const handleToggleEvent = () => {
    setToggle(!toggle);
  };
  const { id } = useParams<{ id: string }>();
  console.log(id);

  useEffect(() => {
    const fetchProjectData = async () => {
      if (id !== undefined) {
        try {
          const projectData = await fetchProject(id);
          setProject(projectData);
          console.log(projectData);
        } catch (error) {
          console.error("Error fetching project:", error);
        }
      }
    };

    fetchProjectData();
  }, [id]);

  const projectDetails =
    project?.description !== undefined ? (
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: project?.description
          }}
        />
      </div>
    ) : undefined;

  useEffect(() => {
    console.log("Project", project);
  }, [project]);

  return (
    <div className={`${css.wrapper}`}>
      <ArrowBack to="../../" />
      <Container>
        <h1 className={`${css.title}`}>Pluton</h1>
        <div className={`${css.card}`}>
          {project !== undefined && (
            <ProjectCard project={project} link={"#"} />
          )}
        </div>
      </Container>
      <section className={css.details}>
        <div className={css.spoiler_toggle}>
          <ToggleButton
            button1="Details"
            button2="Project team"
            onClick={handleToggleEvent}
          />
        </div>
        {!toggle ? (
          <div className={css.details__text}>{projectDetails}</div>
        ) : (
          <div className={css.details__project}>
            {paricipantList.map((person) => (
              <ParticipantCard {...person} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ProjectPage;
