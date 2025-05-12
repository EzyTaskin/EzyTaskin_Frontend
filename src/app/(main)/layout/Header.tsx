"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";

const Header = () => {
    const pathname = usePathname();

    const navLinks = [
        {href: "/home", label: "Home"},
        {href: "/browse-task", label: "Browse task"},
        {href: "/my-tasks", label: "My task"},
        {href: "/find-providers", label: "Find Providers"},
    ];

    return (
        <header
            className="fixed top-0 left-0 right-0 h-auto flex justify-between items-center p-4 bg-white shadow-sm border-b border-black-100 px-20 z-50">
            {/* Logo */}
            <Link href="/home">
                <div className="flex items-center gap-2">
                    <Image src="/polygon.svg" alt="Polygon" width={30} height={30}/>
                    <span className="text-2xl font-bold">EzyTaskin</span>
                </div>
            </Link>

            {/* Navigation Links */}
            <div className="text-xl flex gap-12">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`font-medium text-lg hover:text-[var(--color-secondary)] ${
                            pathname === link.href
                                ? "text-[var(--color-primary)]"
                                : "text-black"
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Post Button */}
            <Link href="/post">
                <PrimaryButton width="w-4xs" fontStyle="font-bold"/>
            </Link>

            {/* Icons */}
            <div className="text-xl flex gap-8 items-center">
                <Link href="/profile?subpage=notifications">
                    <Image
                        src="/bell-notifications.svg"
                        alt="Icon Notification"
                        width={0}
                        height={0}
                        className="w-8 h-8"
                        unoptimized
                    />
                </Link>
                <Link href="/profile">
                    <Image
                        src="/icon-user.svg"
                        alt="User Icon"
                        width={0}
                        height={0}
                        className="w-8 h-8"
                        unoptimized
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;
