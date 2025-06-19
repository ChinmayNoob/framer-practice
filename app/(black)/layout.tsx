'use client'
import HomeButton from "@/components/home-button";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function SixLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="flex justify-center items-center">
                <HomeButton />
            </div>
            <main>{children}</main>
        </div>
    );
}
