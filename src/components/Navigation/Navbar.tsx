"use client";
import React from "react";
import Image from "next/image";
import useUser from "@/state-management/state/user.state";
import Link from "next/link";

export default function Navbar() {
    const { user } = useUser();
    return (
        <div className="text-white top-0 left-0 right-0 bg-transparent absolute px-6 py-4 flex justify-between items-center z-10 ">
            <Image
                src="/interhacktive.svg"
                alt="Interhacktive Logo"
                height={40}
                width={100}
            />
            <div className="flex gap-3">
                <Link href="/">Home</Link>
                <Link href="/home" className="">
                    Projects
                </Link>
                <Link href="/" className="">
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
