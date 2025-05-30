"use client";

import { useState, useEffect } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { GoEye, GoEyeClosed } from "react-icons/go";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {getApiUrl} from "src/app/helpers/api/url";

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [ password, setPassword ] = useState("");

    const searchParams = useSearchParams();

    useEffect(() => {
        const error = searchParams.get("error");
        if (error) {
            setErrorMessage(decodeURIComponent(error));
            setShowErrorModal(true);
        }
    }, [searchParams]);

    return (
        <div className="relative flex items-center justify-center min-h-screen">
            {/* Signup Form */}
            <form
                method="POST"
                className="bg-(--color-tertiary) p-8 rounded-[15px] shadow-lg w-2/5 z-10"
                action={getApiUrl("Account/Register", {returnUrl: "/home"})}
            >
                <h2 className="text-[48px] font-bold text-center">Create an Account</h2>
                <p className="text-center text-gray-700 text-[20px] mb-6">
                    Enter your information to create an account.
                </p>

                {/* Full Name */}
                <div className="mb-4">
                    <label className="block text-[22px] font-medium mb-1">
                        Full name
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
                        <IoPersonOutline className="text-gray-500 text-[22px]" />
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Nguyen Nhat Quynh"
                            required
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
                            name="email"
                            placeholder="somebody@example.com"
                            required
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
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
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
                        Confirm Password
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
                        <CiLock className="text-gray-600 text-[25px]" />
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            onChange={(e) => e.target.setCustomValidity(
                                e.target.value === password ? "" : "Passwords do not match."
                            )}
                            required
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
                        label="Create Account"
                        width="w-[200px]"
                        borderRadius="rounded-[10px]"
                    />
                </div>

                {/* Login link */}
                <div className="text-center mt-4 text-[18px] text-gray-600">
                    Already have an account?{" "}
                    <Link
                        href="/Account/Login"
                        className="text-[var(--color-primary)] font-medium hover:underline"
                    >
                        Log In
                    </Link>
                </div>
            </form>

            {/* Error Modal with background */}
            {showErrorModal && (
                <>
                    {/* Semi-transparent black background */}
                    <div className="fixed inset-0 bg-black/30 z-20"></div>

                    {/* Modal itself */}
                    <div className="fixed inset-0 flex items-center justify-center z-30">
                        <div className="bg-white rounded-lg p-8 max-w-md mx-auto shadow-lg text-center">
                            <h2 className="text-2xl font-bold mb-4 text-red-600">Sign Up Error</h2>
                            <p className="text-gray-700 text-lg mb-6">{errorMessage}</p>
                            <button
                                onClick={() => setShowErrorModal(false)}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
