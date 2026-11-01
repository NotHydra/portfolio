import { Badge } from "./badge";

export interface ProjectExternalLink {
    name: string;
    url: string;
    icon: string;
}

export interface Project {
    title: string;
    image: string;
    url?: string;
    subtitle: string;
    link: {
        name: string;
        url: string;
    };
    description: string;
    badges: Badge[];
    externalLinks?: ProjectExternalLink[];
}

export interface ProjectState {
    projects: Project[];
}
