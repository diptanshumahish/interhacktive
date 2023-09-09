import ProjectCard from "@/components/Projects/ProjectCard";
import { ShowcaseProjectMin } from "@/models/showcaseproject.model";
import React from "react";

const projects: ShowcaseProjectMin[] = [
    {
        projectName: "India Aura , The one stop solution for Indian Tourism",
        projectDescription:
            "India is a beautiful country. The diversity in this country is incredible. Even then, many smaller countries attract more foreign tourists than India. But why? Why can't we bring people to show them our amazing country? The answer could be simple, BRANDING. India is the most beautiful country in the world ,the Himalayan ",
        projectId: "001",
        projectImage:
            "https://img.playbook.com/MggHTnK_IFjwKpEzMkxKmHnUgmj53yMg0GVB987-POU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2U2MTc2NGU1/LWNmYTEtNGVhMC1i/ODUxLTZiMGQyZWVj/Y2IwOA",
        projectRank: "2nd Position",
    },
    {
        projectName: "India Aura , The one stop solution for Indian Tourism",
        projectDescription:
            "India is a beautiful country. The diversity in this country is incredible. Even then, many smaller countries attract more foreign tourists than India. But why? Why can't we bring people to show them our amazing country? The answer could be simple, BRANDING. India is the most beautiful country in the world ,the Himalayan ",
        projectId: "002",
        projectImage:
            "https://img.playbook.com/TkyepctQsL8DmxR_YAhu7gRTjXpL9CIFSA9Ph_9Hys8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2RlMzBiOWIx/LTgwMGItNGQ2OS1h/ODRiLWM2MWQyOTgx/ZGIzZg",
        projectRank: "1st Position",
    },
    {
        projectName: "India Aura , The one stop solution for Indian Tourism",
        projectDescription:
            "India is a beautiful country. The diversity in this country is incredible. Even then, many smaller countries attract more foreign tourists than India. But why? Why can't we bring people to show them our amazing country? The answer could be simple, BRANDING. India is the most beautiful country in the world ,the Himalayan ",
        projectId: "002",
        projectImage:
            "https://img.playbook.com/TkyepctQsL8DmxR_YAhu7gRTjXpL9CIFSA9Ph_9Hys8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2RlMzBiOWIx/LTgwMGItNGQ2OS1h/ODRiLWM2MWQyOTgx/ZGIzZg",
        projectRank: "Flutter Track",
    },
    {
        projectName: "India Aura , The one stop solution for Indian Tourism",
        projectDescription:
            "India is a beautiful country. The diversity in this country is incredible. Even then, many smaller countries attract more foreign tourists than India. But why? Why can't we bring people to show them our amazing country? The answer could be simple, BRANDING. India is the most beautiful country in the world ,the Himalayan ",
        projectId: "002",
        projectImage:
            "https://img.playbook.com/TkyepctQsL8DmxR_YAhu7gRTjXpL9CIFSA9Ph_9Hys8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2RlMzBiOWIx/LTgwMGItNGQ2OS1h/ODRiLWM2MWQyOTgx/ZGIzZg",
        projectRank: "Flutter Track",
    },
];

export default function page() {
    return (
        <div className="py-[8vh] px-[5%] relative">
            {/* animations  */}
            <div className="absolute top-[calc(25vh-50px)] left-[calc(50vw-30px)] opacity-20  duration-1000 z-0">
                <div className=" h-[90px] blur-2xl animate-pulse w-[170px] bg-red-400" />
                <div className=" h-[90px] blur-2xl animate-pulse w-[140px] bg-orange-500" />
                <div className=" h-[50px] blur-2xl animate-pulse w-[190px] bg-yellow-500" />
            </div>
            <div className="absolute top-[calc(50vh-50px)] left-[80vw] opacity-20  duration-1000 z-0">
                <div className=" h-[50px] blur-2xl animate-spin w-[70px] bg-red-400" />
                <div className=" h-[90px] blur-2xl animate-pulse w-[240px] bg-orange-400" />
                <div className=" h-[50px] blur-2xl animate-pulse w-[90px] bg-yellow-500" />
            </div>
            <div className="absolute top-[55vh] left-[15vw] opacity-20  duration-1000 z-0">
                <div className=" h-[50px] blur-2xl animate-pulse w-[270px] bg-blue-500" />
                <div className=" h-[20px] blur-2xl animate-pulse w-[140px] bg-violet-500" />
                <div className=" h-[150px] blur-2xl animate-pulse rounded-xl w-[190px] bg-yellow-500" />
            </div>
            {/* animations  */}
            <div className="py-2 border-b border-[#ffffff3a] border-dashed">
                <h2 className="text-theme-main text-3xl font-bold ">
                    Projects
                </h2>
                <span className="text-white text-opacity-75">
                    Check out the cool projects we got by our amazing
                    participants
                </span>
            </div>

            <div className="py-[5vh] grid lg:grid-cols-2 grid-cols-1 gap-8 justify-center z-10  ">
                {projects.map((ele) => {
                    return (
                        <ProjectCard
                            projectDescription={ele.projectDescription}
                            projectId={ele.projectId}
                            projectImage={ele.projectImage}
                            projectName={ele.projectName}
                            projectRank={ele.projectRank}
                            key={ele.projectRank}
                        />
                    );
                })}
            </div>
        </div>
    );
}
