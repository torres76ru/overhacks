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

export const fetchProject = async (id: number): Promise<ProjectState> => {
  try {
    const response = await axios.get<ProjectState>(
      `${API_URL}/project/?projectuuid=${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
