import { Badge } from "./badge";

export interface Project {
    title: string;
    image: string;
    url: string;
    subtitle: string;
    link: {
        name: string;
        url: string;
    };
    description: string;
    badges: Badge[];
}

export interface ProjectState {
    projects: Project[];
}
