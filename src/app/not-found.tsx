"use client";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="h-screen w-screen flex items-center justify-center ">
            <div className="flex flex-col gap-4 justify-center items-center">
                <Image
                    src="/Background/404.svg"
                    alt="404 page"
                    height={200}
                    width={500}
                    className="animate-pulse"
                />
                <span className="text-white text-lg">
                    Nah, this page doesn't exist somehow,
                </span>
                <Link
                    href="/"
                    className="bg-white px-1 py-1 rounded-full  hover:bg-orange-500"
                >
                    <span className="border px-4 py-1 rounded-full border-theme-background ">
                        Go Back
                    </span>
                </Link>
            </div>
        </div>
    );
}
