import { TECHSTACKDETAILS } from "./techstack.model";
import { CHOOSETRACK } from "./tracks.model";

export class PROJECT {
    declare projectName: string;
    declare projectDescription: string;
    declare projectMembers: string;
    declare projectImage: string;
    declare tracksUsed: CHOOSETRACK;
    declare demoVideo: string;
    declare imageScreenshots?: string[];
    declare whyProject: string;
    declare techStack: TECHSTACKDETAILS[];
}
