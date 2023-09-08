//! This one below will be used to get basic project details to showcase on the page (overview)

import { TECHSTACKDETAILS } from "./techstack.model";

export class ShowcaseProjectMin {
    declare projectName: string;
    declare projectId: string; //* will be used to connect with the full project details page
    declare projectDescription: string; //? mini description(Maybe trim some part)
    declare projectImage: string; //* Square shaped image maybe
    declare projectRank: string; //*1st position
}

//! This one will have specific details of the entire project

export class ShowCaseProjectFull {
    declare projectName: string;
    declare projectId: string; //* will be used to connect with the full project details page
    declare projectDescription: string; //* Full description
    declare projectImage: string; //* 16/9  image maybe
    declare projectRank: string; //* 1st position
    declare projectMembers: showcaseProjectMember[];
    declare projectVideoLink: string;
    declare projectImageScreenshots: string[]; //* either 16/9 or 9/16
    declare whyProject: string; //* why they chose the project.
    declare techstackused: TECHSTACKDETAILS[];
}

export class showcaseProjectMember {
    declare memberName: string;
    declare memberImage: string;
    declare memberLinkedin: string;
}
