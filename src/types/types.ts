export interface HackathonState {
  id: number;
  __v: number;
  description: string;
  endDate: string | null;
  format: string;
  imageUrl: string;
  name: string;
  prize: string;
  projects: string[];
  startDate: string;
  topics: string[];
  projectMembersLimit: string;
}

export interface ProjectState {
  _id: string;
  name: string;
  projectMembers: string[];
  leader: string;
  memberLimit: number;
  openRoles: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  description?: string;
  registeredHackathon: string;
}

export interface TopicState {
  name: string;
}
