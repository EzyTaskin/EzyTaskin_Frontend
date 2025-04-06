"use client";

import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { GoEye, GoEyeClosed } from "react-icons/go";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-(--color-tertiary) p-8 rounded-[15px] shadow-lg w-2/5">
        <h2 className="text-[48px] font-bold text-center">Create an account</h2>
        <p className="text-center text-gray-700 text-[20px] mb-6">
          Enter your information to create an account
        </p>

        {/* Full name */}
        <div className="mb-4">
          <label className="block text-[22px] font-medium mb-1">
            Full name
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <IoPersonOutline className="text-gray-500 text-[22px]" />
            <input
              type="text"
              placeholder="Nguyen Nhat Quynh"
              className="text-gray-700 ml-2 w-full outline-none bg-transparent text-[20px]"
            />
          </div>
        </div>

        {/* Email */}
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

        {/* Password */}
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

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-[22px] font-medium mb-1">
            Confirm password
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <CiLock className="text-gray-600 text-[25px]" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="text-gray-700 ml-2 w-full outline-none bg-transparent text-[20px]"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="focus:outline-none"
            >
              {showConfirmPassword ? (
                <GoEyeClosed className="text-gray-600 text-[22px]" />
              ) : (
                <GoEye className="text-gray-700 text-[22px]" />
              )}
            </button>
          </div>
        </div>

        {/* Create Account Button */}
        <div className="mt-10 flex justify-center">
          <PrimaryButton
            label="Create account"
            width="w-[200px]"
            borderRadius="rounded-[10px]"
          />
        </div>

        {/* Login link */}
        <div className="text-center mt-4 text-[18px] text-gray-600">
          Already have an account?{" "}
          <a
            href="#"
            className="text-[var(--color-primary)] font-medium hover:underline"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
