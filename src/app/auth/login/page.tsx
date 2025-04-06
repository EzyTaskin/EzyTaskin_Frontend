"use client";

import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { GoEye, GoEyeClosed } from "react-icons/go";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-(--color-tertiary) p-8 rounded-[15px] shadow-lg w-2.5/6 h-[600px]">
        <h2 className="text-[48px] font-bold text-center">Log in</h2>
        <p className="text-center text-gray-700 text-[20px] mb-6">
          Enter your credentials to access your account
        </p>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-[22px] font-medium mb-1">Email</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <MdOutlineMail className="text-gray-500 text-[22px]" />
            <input
              type="email"
              placeholder="example@gmail.com"
              className="text-gray-700 ml-2 w-full outline-none bg-transparent text-[20px]"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-[22px] font-medium mb-1">Password</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <CiLock className="text-gray-600 text-[25px]" />
            <input
              type={showPassword ? "text" : "password"}
              className="text-gray-700 ml-2 w-full outline-none bg-transparent text-[20px]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="focus:outline-none"
            >
              {showPassword ? (
                <GoEyeClosed className="text-gray-600 text-[22px]" />
              ) : (
                <GoEye className="text-gray-700 text-[22px]" />
              )}
            </button>
          </div>
        </div>

        {/* Button */}
        <div className="my-10 flex justify-center">
          <PrimaryButton
            label="Log in"
            width="w-[150px]"
            borderRadius="rounded-[10px]"
          />
        </div>

        {/* Links */}
        <div className="text-center mt-4">
          <a
            href="#"
            className="text-[18px] text-[var(--color-primary)] hover:underline"
          >
            Forgot your password?
          </a>
        </div>

        <div className="text-[18px] text-center mt-2">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-[var(--color-primary)] font-medium hover:underline"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
