import { Badge } from "./badge";

export interface Project {
    title: string;
    image: string;
    url: string;
    subtitle: string;
    organization: {
        name: string;
        url: string;
    };
    description: string;
    badges: Badge[];
}
