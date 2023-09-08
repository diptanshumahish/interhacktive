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
                <div className="text-white flex flex-col justify-center items-center selection:bg-theme-main selection:text-white">
                    <h1 className="text-9xl font-bold">
                        Inter
                        <span className="text-theme-main font-black">
                            Hacktive.
                        </span>
                    </h1>
                    <span className="flex gap-2 font-bold text-lg">
                        <span>Code.</span>
                        <span>Collab.</span>
                        <span>Conquer.</span>
                    </span>
                    <div className="h-6" />
                    <div
                        style={{ backdropFilter: "blur(4px)" }}
                        className="w-[50vw] bg-white bg-opacity-5 border border-[#ffffff1b]  p-6 rounded-md flex flex-row gap-4 justify-center items-center"
                    >
                        <div className="w-[80%] border-r pr-6">
                            <Image
                                src="/Assets/sccse.png"
                                height={350}
                                width={350}
                                alt="sccse"
                            />
                        </div>
                        <div className="flex flex-col gap-4 pl-6">
                            <p className="text-lg ">
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
                            <div className="flex items-center gap-4">
                                <Link
                                    className="bg-white text-black p-2 px-4 rounded-full flex items-center gap-2 text-lg"
                                    href="/"
                                >
                                    I'm Interested
                                    <ArrowUpRight />
                                </Link>
                                <Link
                                    className="border  text-white p-2 px-4 rounded-full flex items-center gap-2 text-lg"
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
