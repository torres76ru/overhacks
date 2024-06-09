import { useEffect, useState } from "react";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import { fetchProjects } from "../../../actions/projects";
import { ProjectState } from "../../../types/types";

interface Props {
  hackathonId: number;
}

const HackathonPojects = ({ hackathonId }: Props) => {
  const [projects, setProjects] = useState<ProjectState[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects(hackathonId);
        setProjects(data);
      } catch (error) {
        setError("No one registered");
      } finally {
        setLoading(false);
      }
    };

    hackathonId !== null && loadProjects();
  }, []);
  if (loading) {
    return (
      <div
        style={{ fontFamily: "Raleway", color: "#fff", textAlign: "center" }}
      >
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{ fontFamily: "Raleway", color: "#fff", textAlign: "center" }}
      >
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default HackathonPojects;
