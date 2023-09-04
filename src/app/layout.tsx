import ClientProvider from "@/context/ClientProvider";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "InterHacktive",
    description:
        "The official website for the Hackathon by Students' Chapter CSE",
    authors: { name: "Students' Chapter CSE", url: "sccseaot.com" },
    creator: "Students' Chapter CSE",
    keywords:
        "Students' Chapter CSE, SC CSE, InterHacktive, interhacktive, sccse hackathon",
    openGraph: {
        type: "website",
        countryName: "India",
        emails: "scceaot@gmail.com",
        title: "InterHacktive: The official hackathon organized by the Students' Chapter CSE of AOT",
        siteName: "InterHacktive",
        images: [
            {
                url: "https://img.playbook.com/TkyepctQsL8DmxR_YAhu7gRTjXpL9CIFSA9Ph_9Hys8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2RlMzBiOWIx/LTgwMGItNGQ2OS1h/ODRiLWM2MWQyOTgx/ZGIzZg",
            },
        ],
        description:
            "The official page for the annual hackathon organized by the Students' Chapter CSE of AOT college",
        determiner: "the",
        locale: "en-IN",
    },
    publisher: "Students' Chapter CSE",
    themeColor: "#FC2121",
    robots: { index: true, follow: true },
    category: "Event Page",
    icons: "https://img.playbook.com/TkyepctQsL8DmxR_YAhu7gRTjXpL9CIFSA9Ph_9Hys8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2RlMzBiOWIx/LTgwMGItNGQ2OS1h/ODRiLWM2MWQyOTgx/ZGIzZg",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <ClientProvider>
                <body className={nunito.className}>{children}</body>
            </ClientProvider>
        </html>
    );
}
