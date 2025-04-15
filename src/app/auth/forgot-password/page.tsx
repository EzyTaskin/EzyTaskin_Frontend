"use client";

import { MdOutlineMail } from "react-icons/md";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-(--color-tertiary) p-8 rounded-[15px] shadow-lg w-2/5">
        <h2 className="text-2xl font-bold text-center">Reset password</h2>
        <p className="text-center text-gray-700 text-[20px] mb-6">
          Enter your email address and we’ll send you a link to reset your
          password
        </p>

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

        <div className="mt-10 flex justify-center">
          <PrimaryButton
            label="Send reset link"
            width="w-[250px]"
            borderRadius="rounded-[10px]"
          />
        </div>

        <div className="text-center mt-2 text-[18px] text-gray-600">
          Remember your password?{" "}
          <Link
            href="/auth/login"
            className="text-[var(--color-primary)] font-medium hover:underline"
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
