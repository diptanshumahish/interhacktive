import { ShowcaseProjectMin } from "@/models/showcaseproject.model";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Code2, Trophy } from "lucide-react";

export default function ProjectCard({
    projectDescription,
    projectId,
    projectImage,
    projectName,
    projectRank,
}: ShowcaseProjectMin) {
    return (
        <div
            key={projectId}
            className="flex gap-4 items-center text-white bg-white bg-opacity-5 p-4 rounded-lg border border-[#bab1b115]"
        >
            <Image
                src={projectImage}
                className="aspect-square object-cover rounded-md border border-[#ffffff15] xl:h-[200px] w-auto lg:h-[150px] md:h-[120px] h-[150px]"
                height={200}
                width={200}
                alt={projectDescription}
            />
            <div className="flex flex-col md:gap-2 h-full">
                <h3 className="xl:text-xl lg:text-lg text-md font-bold lg:h-[4rem] h-[3rem] line-clamp-2 text-ellipsis">
                    {projectName}
                </h3>
                <span className="h-[4rem] lg:text-[16px] md:text-md text-sm overflow-hidden line-clamp-3 text-white text-opacity-80 ">
                    {projectDescription}
                </span>
                <div className="flex xl:flex-row flex-col justify-between xl:py-2 md:p-2 p-0 ">
                    <span className=" lg:text-[16px] text-[14px] flex items-center gap-4 w-fit text-yellow-500 py-1 rounded-md font-bold ">
                        {projectRank}
                        <Trophy />
                    </span>
                    <Link
                        href={`/projects/${projectId}`}
                        className="bg-white flex xl:text-[16px] text-[14px] items-center justify-between text-black px-2 py-1 rounded-md lg:w-[50%] hover:bg-theme-main hover:text-white "
                    >
                        See more
                        <Code2 />
                    </Link>
                </div>
            </div>
        </div>
    );
}
