"use client";

import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import useQueryNotifications from "src/app/hooks/useQueryNotifications";
import {useNotifications} from "src/app/hooks/useNotifications";

const Header = () => {
    const pathname = usePathname();
    const {unseenCount} = useNotifications();

    console.log(unseenCount)

    const navLinks = [
        {href: "/home", label: "Home", description: "Return to the homepage and discover tasks"},
        {href: "/browse-task", label: "Browse Tasks", description: "Explore available tasks and apply"},
        {href: "/my-tasks", label: "My Tasks", description: "View tasks you've taken as a provider"},
        {href: "/my-requests", label: "My Requests", description: "Manage tasks you've posted"},
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

            {/* Navigation Links with Tooltips */}
            <div className="text-xl flex gap-12">
                {navLinks.map((link) => (
                    <div key={link.href} className="relative group">
                        <Link
                            href={link.href}
                            className={`font-medium text-lg hover:text-[var(--color-secondary)] ${
                                pathname === link.href
                                    ? "text-[var(--color-primary)]"
                                    : "text-black"
                            }`}
                        >
                            {link.label}
                        </Link>
                        <div
                            className="absolute top-full mt-2 left-0 w-max max-w-3xl px-4 py-2 text-sm text-white bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition whitespace-normal text-left z-10">
                            {link.description}
                        </div>
                    </div>
                ))}
            </div>

            {/* Post Button */}
            <Link href="/post">
                <PrimaryButton width="w-4xs" fontStyle="font-bold"/>
            </Link>

            {/* Icons */}
            <div className="text-xl flex gap-8 items-center">
                <Link href="/profile?subpage=notifications">
                    <div className="relative">
                        <Image
                            src="/bell-notifications.svg"
                            alt="Icon Notification"
                            width={0}
                            height={0}
                            className="w-8 h-8"
                            unoptimized
                        />
                        {unseenCount > 0 && (
                            <span
                                className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {unseenCount}
            </span>
                        )}
                    </div>
                </Link>
                <Link href="/profile">
                    <Image
                        src={pathname === '/profile' ? "/icon-user-blue.svg" : "/icon-user.svg"}
                        alt="User Icon"
                        width={0}
                        height={0}
                        className={`w-8 h-8`}
                        unoptimized
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;
