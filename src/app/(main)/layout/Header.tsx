'use client'

import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import React from "react";

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-sm">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[var(--primary-color)] clip-triangle"></div>
                <span className="text-xl font-bold">EzyTaskin</span>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-6 text-[var(--secondary-color)]">
                <a href="#" className="text-[var(--primary-color)] font-medium">Home</a>
                <a href="#" className="hover:text-[var(--hover-color)]">How it works</a>
                <a href="#" className="hover:text-[var(--hover-color)]">Login</a>
                <a href="#" className="hover:text-[var(--hover-color)]">Sign up</a>
            </div>

            {/* Button */}
            <PrimaryButton/>
        </header>
    );
};

export default Header;
