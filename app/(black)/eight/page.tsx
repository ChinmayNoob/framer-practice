"use client";

import DynamicMenu from "./dynamic-menu";
import Link from "next/link";

export default function EightPage() {
    // Sample menu items
    const menuItems = [
        <Link href="/" key="home">Home</Link>,
        <Link href="/one" key="about">About</Link>,
        <Link href="/two" key="services">Services</Link>,
        <Link href="/three" key="portfolio">Portfolio</Link>,
        <Link href="/four" key="contact">Contact</Link>,
    ];

    const menuItemsUp = [
        <Link href="/five" key="blog">Blog</Link>,
        <Link href="/six" key="resources">Resources</Link>,
        <Link href="/seven" key="team">Team</Link>,
    ];

    return (
        <div className="min-h-screen bg-black p-8">
            <div className="flex justify-center gap-16 max-w-4xl mx-auto mt-16">
                <div>
                    <DynamicMenu
                        menuName="Menu"
                        menuItems={menuItems}
                        openDirection="down"
                    />
                </div>

                <div>
                    <DynamicMenu
                        menuName="More"
                        menuItems={menuItemsUp}
                        openDirection="up"
                    />
                </div>
            </div>
        </div>
    );
}
