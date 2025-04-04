"use client";

import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[100px] flex justify-between items-center p-4 bg-white shadow-sm border-b border-black-100 px-20">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/polygon.svg" alt="Polygon" width={32} height={32}></Image>
        <span className="text-[32px] font-bold">EzyTaskin</span>
      </div>

      {/* Navigation Links */}
      <div className="text-[22px] flex gap-25 text-[#000022]">
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
      <PrimaryButton width="w-[161px]" />
    </header>
  );
};

export default Header;
