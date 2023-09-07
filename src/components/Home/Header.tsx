import React from "react";
import GradientParentHome from "../Gradients/GradientParent";

export default function Header() {
    return (
        <GradientParentHome>
            <header className="flex items-center h-full justify-center relative">
                <div className="text-white flex flex-col justify-center items-center">
                    <h1 className="text-9xl font-bold">
                        Inter
                        <span className="text-theme-main font-black">
                            Hacktive.
                        </span>
                    </h1>
                    <span className="flex gap-2">
                        <span>Code.</span>
                        <span>Collab.</span>
                        <span>Conquer.</span>
                    </span>
                </div>
            </header>
        </GradientParentHome>
    );
}
