import axios from "axios";
import { API_URL } from "../App";
import { ProjectState } from "../types/types";

export const fetchProjects = async (id: number): Promise<ProjectState[]> => {
  try {
    const response = await axios.get<ProjectState[]>(
      `${API_URL}/hackathons/${id}/projects`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

interface ProjectResponse {
  status: string;
  message: string;
  data: ProjectState;
}

export const fetchProject = async (id: string): Promise<ProjectState> => {
  try {
    const response = await axios.get<ProjectResponse>(
      `${API_URL}project/?projectuuid=${id}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
