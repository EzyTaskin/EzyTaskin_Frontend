"use client";

import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import React from "react";
import Image from "next/image";
import Link from 'next/link'

const Header = () => {
    return (
        <header
            className="fixed top-0 left-0 right-0 h-auto flex justify-between items-center p-4 bg-white shadow-sm border-b border-black-100 px-20">
            {/* Logo */}
            <Link href="/">
                <div className="flex items-center gap-2">
                    <Image src="/polygon.svg" alt="Polygon" width={30} height={30}></Image>
                    <span className="text-2xl font-bold">EzyTaskin</span>
                </div>
            </Link>

            {/* Navigation Links */}

            <div className="text-xl flex gap-12">
                <Link
                    href="/"
                    className="text-[var(--color-primary)] font-medium hover:text-[var(--color-secondary)] text-lg"
                >
                    Home
                </Link>
                <Link
                    href="#how-it-works"
                    className="font-medium hover:text-[var(--color-secondary)] text-lg"
                >
                    How It Works
                </Link>
                <Link
                    href="/Account/Login"
                    className="font-medium hover:text-[var(--color-secondary)] text-lg"
                >
                    Login
                </Link>
                <Link
                    href="/Account/Register"
                    className="font-medium hover:text-[var(--color-secondary)] text-lg"
                >
                    Sign Up
                </Link>
            </div>

            {/* Button */}
            <Link href="/post">
                <PrimaryButton width="w-4xs" fontStyle="font-bold"/>
            </Link>
        </header>
    );
};

export default Header;
