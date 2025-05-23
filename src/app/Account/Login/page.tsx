"use client";

import {useState, useEffect} from "react";
import {MdOutlineMail} from "react-icons/md";
import {FaGoogle, FaMicrosoft} from "react-icons/fa6";
import {CiLock} from "react-icons/ci";
import {GoEye, GoEyeClosed} from "react-icons/go";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {getApiUrl} from "src/app/helpers/api/url"

export default function Login() {
    const [url, setUrl] = useState<string>("")
    const [showPassword, setShowPassword] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [externalUrls, setExternalUrls] = useState<Map<string, string>>(new Map());

    const searchParams = useSearchParams();

    useEffect(() => {
        const error = searchParams.get("error");
        if (error) {
            setErrorMessage(decodeURIComponent(error));
            setShowErrorModal(true);
        }
        const returnUrl = searchParams.get("returnUrl") || "/";
        setUrl(getApiUrl("Account/Login", {returnUrl: returnUrl}));

        function getExternalUrl(provider: string) {
            return getApiUrl("Account/ExternalLogin", {
                provider: provider,
                returnUrl: returnUrl,
                referrer: window.location.href
            });
        }

        setExternalUrls(new Map<string, string>([
            ["Google", getExternalUrl("Google")],
            ["Microsoft", getExternalUrl("Microsoft")]
        ]));
    }, [searchParams]);

    return (
        <div className="relative flex items-center justify-center min-h-screen">
            {/* Login Form */}
            <form
                method="POST"
                className="bg-(--color-tertiary) p-8 rounded-[15px] shadow-lg w-2.5/6 z-10"
                action={getApiUrl("Account/Login", {returnUrl: "/home"})}
            >
                <h2 className="text-[48px] font-bold text-center">Log In</h2>
                <p className="text-center text-gray-700 text-[20px] mb-6">
                    Enter your credentials to access your account
                </p>

                {/* Email Field */}
                <div className="mb-4">
                    <label className="block text-[22px] font-medium mb-1">Email</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
                        <MdOutlineMail className="text-gray-500 text-[22px]"/>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            required
                            className="text-gray-700 ml-2 w-full outline-none bg-transparent text-[20px]"
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div className="mb-4">
                    <label className="block text-[22px] font-medium mb-1">Password</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
                        <CiLock className="text-gray-600 text-[25px]"/>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            required
                            className="text-gray-700 ml-2 w-full outline-none bg-transparent text-[20px]"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="focus:outline-none"
                        >
                            {showPassword ? (
                                <GoEyeClosed className="text-gray-600 text-[22px]"/>
                            ) : (
                                <GoEye className="text-gray-700 text-[22px]"/>
                            )}
                        </button>
                    </div>
                </div>

                {/* Button */}
                <div className="my-10 flex justify-center">
                    <PrimaryButton
                        label="Log In"
                        width="w-[150px]"
                        borderRadius="rounded-[10px]"
                    />
                </div>

                {/* Links */}
                <div className="text-center mt-2">
                    <Link
                        href="/Account/ForgotPassword"
                        className="text-[18px] text-[var(--color-primary)] hover:underline"
                    >
                        Forgot your Password?
                    </Link>
                </div>

                <div className="text-[18px] text-center mt-2">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/Account/Register"
                        className="text-[var(--color-primary)] font-medium hover:underline"
                    >
                        Sign Up
                    </Link>
                </div>

                <div className="my-4 flex items-center">
                    <hr className="border-gray-300 flex-grow"/>
                    <span className="mx-4">or</span>
                    <hr className="border-gray-300 flex-grow"/>
                </div>

                <div className="my-4 flex flex-col items-center">
                    <div className="flex items-center gap-8">
                        <Link href={externalUrls.get("Google") || "#"}>
                            <FaGoogle size={32} />
                        </Link>
                        <Link href={externalUrls.get("Microsoft") || "#"}>
                            <FaMicrosoft size={32} />
                        </Link>
                    </div>
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
                            <h2 className="text-2xl font-bold mb-4 text-red-600">Login Error</h2>
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
