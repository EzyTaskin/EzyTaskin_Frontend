"use client";

import {useState, useEffect} from "react";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import {MdOutlineMail} from "react-icons/md";
import {useSearchParams} from "next/navigation";
import {getApiUrl} from "src/app/helpers/api/url";
import Link from "next/link";
import {useMutateAccount} from "src/app/hooks/useMutateAccount";
import useQueryProfile from "src/app/hooks/useQueryProfile";

export default function EmailConfirm() {
    const [code, setCode] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const {commonDetail} = useQueryProfile();

    const accountWorker = useMutateAccount();

    const searchParams = useSearchParams();
    useEffect(() => {
        const error = searchParams.get("error");
        const codeParam = searchParams.get("code");
        const userIdParam = searchParams.get("userId");

        if (error) {
            setErrorMessage(decodeURIComponent(error));
            setShowErrorModal(true);
        }

        if (codeParam) {
            try {
                const decodedCode = decodeURIComponent(codeParam);
                setCode(decodedCode);
            } catch {
                setCode(codeParam);
            }
        }

        if (userIdParam) {
            console.log("User ID from query:", userIdParam);
        }
    }, [searchParams]);

    const handleSendCode = async () => {
        setStatus("loading");
        try {
            const res = await accountWorker.resendEmailConfirmation(commonDetail.email)
            if (!res.ok) throw new Error("Failed to send confirmation code.");

            setMessage("A verification code has been sent to your email.");
            setStatus("success");
        } catch (err: any) {
            setMessage(err.message || "Something went wrong.");
            setStatus("error");
        }
    };

    const handleVerifyCode = async () => {
        if (!code) {
            setMessage("Please fill in both email and verification code.");
            setStatus("error");
            return;
        }

        setStatus("loading");
        try {
            const res = await accountWorker.confirmEmail(commonDetail.email, code)

            if (!res.ok) throw new Error("Invalid code or confirmation failed.");

            setMessage("Your email has been confirmed successfully.");
            setStatus("success");
        } catch (err: any) {
            setMessage(err.message || "Confirmation failed.");
            setStatus("error");
        }
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleVerifyCode()
                }}
                className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md z-10"
            >
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
                    Confirm Your Email
                </h2>

                <p className="text-gray-600 text-center text-base mb-6">
                    Enter your email and the code we sent to confirm your account.
                </p>

                {/* Code Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1 text-gray-700">
                        Verification Code
                    </label>
                    <input
                        type="text"
                        name="code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                        placeholder="Enter the code here"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base text-gray-700 outline-none"
                    />
                </div>

                {/* Send Code Button */}
                <div className="flex justify-end mb-4">
                    <button
                        type="button"
                        onClick={handleSendCode}
                        className="text-sm text-blue-600 hover:underline font-medium"
                    >
                        Send/Resend Code
                    </button>
                </div>

                {/* Submit Button */}
                <PrimaryButton
                    label={status === "loading" ? "Confirming..." : "Confirm Email"}
                    width="w-full"
                    borderRadius="rounded-lg"
                />

                {/* Message */}
                {message && (
                    <div
                        className={`mt-4 text-center text-sm ${
                            status === "error"
                                ? "text-red-600"
                                : status === "success"
                                    ? "text-green-600"
                                    : "text-gray-600"
                        }`}
                    >
                        {message}
                    </div>
                )}

                {/* Back to Login */}
                <div className="text-center mt-6">
                    <Link href="/Account/Login" className="text-sm text-[var(--color-primary)] hover:underline">
                        Back to Login
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
                            <h2 className="text-2xl font-bold mb-4 text-red-600">Signup Error</h2>
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
