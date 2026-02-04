import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import AnimatedGradient from "@/components/AnimatedGradient";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-heading",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Lakshmi Chaitanya Sai - Student & Aspiring Product Designer",
    description: "Building secure, human-centered digital experiences. UI/UX • Frontend • Python Backend • Cybersecurity",
    keywords: ["UI/UX Design", "Frontend Development", "Cybersecurity", "Product Design", "Python Backend", "Student Portfolio"],
    authors: [{ name: "Lakshmi Chaitanya Sai" }],
    openGraph: {
        title: "Lakshmi Chaitanya Sai - Student & Aspiring Product Designer",
        description: "Building secure, human-centered digital experiences.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
            <body suppressHydrationWarning>
                <BackgroundAnimation />
                <AnimatedGradient />
                <CustomCursor />
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
