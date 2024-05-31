export interface Hackaton {
  id: number;
  __v: number;
  description: string;
  endDate: string | null;
  format: string;
  imageUrl: string;
  name: string;
  prize: string;
  projects: string[];
  sponsors: string[];
  startDate: string;
  topics: string[];
  projectMembersLimit: string;
  projectsLimit: number | null;
}
