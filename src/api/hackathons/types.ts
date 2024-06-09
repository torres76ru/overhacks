export enum Topic {
    ONLINE = "online",
    AI = "ai",
    WEB3 = "web3",
    GAMING = "gaming",
    DAPPS = "dapps",
    DEFI = "defi",
    NFT = "nft",
    SECURITY = "security"
}

export interface Role {
    name: string;
    _id: string;
}

export interface Skill {
    name: string;
    role: Role;
    _id: string;
}

export interface Profile {
    _id: string;
    telegramUserName: string;
    projects: string[];
    chatId: number;
    state: string;
    lastSeenUserIndex: number;
    skills: Skill[];
    roles: Role[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    nickname: string;
    photoUrl: string;
    about: string;
    lastSeenHackathonIndex: number;
    preferredTopics: Topic[];
    latitude: number;
    longitude: number;
    lastSeenUserId: string;
    lastSeenHackathonId: string;
    hackathonToLastSeenUserIndexMap: Record<string, number>;
    tempData: string;
    curentHackathonPage: number;
} 

export interface ProfileResponse {
    status: string;
    message: string;
    data: Profile;
}