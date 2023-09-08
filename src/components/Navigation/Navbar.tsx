"use client";
import React from "react";
import Image from "next/image";
import useUser from "@/state-management/state/user.state";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
    const params = usePathname();
    const { user } = useUser();
    return (
        <div className="text-white top-0 left-0 right-0 bg-transparent absolute px-[5%] py-4 flex justify-between items-center z-10 ">
            <Image
                src="/interhacktive.svg"
                alt="Interhacktive Logo"
                height={40}
                width={100}
            />
            <div className="flex gap-6 text-lg">
                <Link
                    href="/"
                    className={twMerge(
                        params === "/"
                            ? "text-theme-main border-b-2 border-theme-main transition-transform"
                            : ""
                    )}
                >
                    Home
                </Link>
                <Link
                    href="/projects"
                    className={twMerge(
                        params === "/projects"
                            ? "text-theme-main border-b-2 border-theme-main transition-transform"
                            : ""
                    )}
                >
                    Projects
                </Link>
                <Link
                    href="/"
                    className={twMerge(
                        params === "/gallery"
                            ? "text-theme-main border-b-2 border-theme-main transition-transform"
                            : ""
                    )}
                >
                    Gallery
                </Link>
            </div>
            <div className=" right-6">
                {user.logged_in ? (
                    <div></div>
                ) : (
                    <Link
                        href="/"
                        className="bg-white px-4 py-1 rounded-full text-black"
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
}
