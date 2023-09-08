import React from "react";
import GradientParentHome from "../Gradients/GradientParent";
import MarqueeHome from "../Marquee/Marquee";
import MarqueeHomeTwo from "../Marquee/MarqueeTwo";
import Link from "next/link";
import { ArrowUpRight, Target } from "lucide-react";
import Image from "next/image";

export default function Header() {
    return (
        <GradientParentHome>
            <div className="absolute top-10 ">
                <MarqueeHome />
            </div>
            <div className="absolute bottom-10">
                <MarqueeHomeTwo />
            </div>
            <header className="flex items-center h-full justify-center relative">
                <div className="text-white flex flex-col justify-center items-center  selection:bg-theme-main selection:text-white">
                    <h1 className="xl:text-9xl lg:text-7xl md:text-5xl text-4xl font-bold">
                        Inter
                        <span className="text-theme-main font-black">
                            Hacktive.
                        </span>
                    </h1>
                    <span className="flex gap-2 font-bold md:text-lg text-md">
                        <span>Code.</span>
                        <span>Collab.</span>
                        <span>Conquer.</span>
                    </span>
                    <div className="h-6" />
                    <div
                        style={{ backdropFilter: "blur(4px)" }}
                        className="xl:w-[50vw] lg:w-[60vw] md:w-[70vw] w-[80vw] bg-white bg-opacity-5 border border-[#ffffff1b]  lg:p-6 md:p-4 p-2 py-4 rounded-md flex md:flex-row flex-col gap-4 justify-center items-center"
                    >
                        <div className="w-[80%] md:border-r md:pr-6 flex items-center justify-center">
                            <Image
                                src="/Assets/sccse.png"
                                height={350}
                                width={350}
                                alt="sccse"
                                className="xl:w-[350px] h-auto lg:w-[300px] md:w-[250px] w-[20vw]"
                            />
                        </div>
                        <div className="flex flex-col gap-4 pl-6">
                            <p className="xl:text-lg md:text-md text-sm md:text-left text-center ">
                                The official annual hackathon, organized by the{" "}
                                <span className="text-theme-main font-semibold">
                                    Students' Chapter CSE
                                </span>{" "}
                                of Academy Of Technology. Started with season 1
                                in 2023, we hit a grand success. Feeling
                                interested? worry no more.{" "}
                                <span className="font-bold">
                                    Join the early waitlist for the season 2
                                </span>
                            </p>
                            <div className="flex md:flex-row flex-col items-center gap-4 ">
                                <Link
                                    className="bg-white md:text-mlg  text-black p-2 px-4 rounded-full flex items-center gap-2 text-sm"
                                    href="/"
                                >
                                    I'm Interested
                                    <ArrowUpRight />
                                </Link>
                                <Link
                                    className="border  text-white p-2 px-4 rounded-full flex items-center gap-2 md:text-lg text-sm"
                                    href="/"
                                >
                                    Check out Projects
                                    <Target />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </GradientParentHome>
    );
}
