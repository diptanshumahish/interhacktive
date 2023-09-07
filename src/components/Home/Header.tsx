import React from "react";
import GradientParentHome from "../Gradients/GradientParent";
import MarqueeHome from "../Marquee/Marquee";
import MarqueeHomeTwo from "../Marquee/MarqueeTwo";
import Link from "next/link";
import { ArrowBigRight, ArrowUpRight } from "lucide-react";

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
                        className="w-[50vw] bg-white bg-opacity-5 p-4 rounded-md flex flex-col gap-4 justify-center items-center"
                    >
                        <p className="text-lg text-center">
                            The official annual hackathon, organized by the
                            Students' Chapter CSE of Academy Of Technology. The
                            Hackathon was first started in 2022, successfully
                            started the s1 with a boom! Click below to join the
                            early waiting list for the Season 2 of
                            InterHakctive.
                        </p>
                        <Link
                            className="bg-white text-black p-2 px-4 rounded-full flex items-center gap-2 text-lg"
                            href="/"
                        >
                            I'm Interested
                            <ArrowUpRight />
                        </Link>
                    </div>
                </div>
            </header>
        </GradientParentHome>
    );
}
