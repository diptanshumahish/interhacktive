import React, { ReactNode } from "react";

interface GradientParentProps {
    children: ReactNode;
}

export default function GradientParentHome({ children }: GradientParentProps) {
    return (
        <section className="h-screen w-screen overflow-hidden relative">
            <>
                {/* center screen  */}
                <div className="absolute top-[calc(45vh-50px)] left-[calc(50vw-30px)] opacity-20  duration-1000">
                    <div className=" h-[90px] blur-2xl animate-pulse w-[170px] bg-red-400" />
                    <div className=" h-[90px] blur-2xl animate-pulse w-[140px] bg-orange-500" />
                    <div className=" h-[50px] blur-2xl animate-pulse w-[190px] bg-yellow-500" />
                </div>
                <div className="absolute top-[calc(50vh-50px)] left-[40vw] opacity-20  duration-1000">
                    <div className=" h-[50px] blur-2xl animate-spin w-[70px] bg-red-400" />
                    <div className=" h-[90px] blur-2xl animate-pulse w-[240px] bg-orange-400" />
                    <div className=" h-[50px] blur-2xl animate-pulse w-[90px] bg-yellow-500" />
                </div>
                <div className="absolute top-[55vh] left-[45vw] opacity-20  duration-1000">
                    <div className=" h-[50px] blur-2xl animate-pulse w-[270px] bg-blue-500" />
                    <div className=" h-[90px] blur-2xl animate-pulse w-[140px] bg-violet-500" />
                    <div className=" h-[50px] blur-2xl animate-pulse w-[190px] bg-yellow-500" />
                </div>
                {/* end center screen  */}

                {/* top area  */}
                <div className="absolute flex top-0 left-0 opacity-20 ">
                    <div className=" h-[40px] blur-2xl animate-none w-[120px] bg-red-400" />
                    <div className=" h-[40px] blur-2xl animate-pulse w-[40px] bg-orange-500" />
                </div>
                {children}
            </>
        </section>
    );
}
