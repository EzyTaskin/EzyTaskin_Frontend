"use client";

import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[80px] flex justify-between items-center p-4 bg-white shadow-sm border-b border-black-100">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-[var(--color-primary)] clip-triangle"></div>
        <span className="text-xl font-bold">EzyTaskin</span>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 text-black">
        <a
          href="#"
          className="text-[var(--color-primary)] font-medium hover:text-[var(--color-secondary)]"
        >
          Home
        </a>
        <a href="#" className="hover:text-[var(--color-secondary)]">
          How it works
        </a>
        <a href="#" className="hover:text-[var(--color-secondary)]">
          Login
        </a>
        <a href="#" className="hover:text-[var(--color-secondary)]">
          Sign up
        </a>
      </div>

      {/* Button */}
      <PrimaryButton />
    </header>
  );
};

export default Header;
