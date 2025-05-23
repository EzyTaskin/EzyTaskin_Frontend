"use client";

import {useState, useEffect} from "react";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import {useSearchParams} from "next/navigation";
import Link from "next/link";
import {getApiUrl} from "src/app/helpers/api/url";

export default function EmailConfirm() {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const searchParams = useSearchParams();

    useEffect(() => {
        const error = searchParams.get("error");

        if (error) {
            setErrorMessage(error);
            setShowErrorModal(true);
        }
    }, [searchParams]);

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <form
                method="POST"
                action={getApiUrl("Account/ConfirmEmail", {returnUrl: searchParams.get("returnUrl") ?? "/Home"})}
                className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md z-10"
            >
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
                    Confirm Your Email
                </h2>

                <p className="text-gray-600 text-center text-base mb-6">
                    Please click {'"Confirm Email"'} if you have created an EzyTaskin account
                    using this email.
                </p>

                {/* Hidden fields */}
                <div className="none">
                    <input hidden={true}
                           readOnly={true}
                           name="userId"
                           value={searchParams.get("userId")} />
                    <input hidden={true}
                           readOnly={true}
                           name="code"
                           value={searchParams.get("code")} />
                </div>

                {/* Submit Button */}
                <PrimaryButton
                    label="Confirm Email"
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

                <div className="text-center mt-6">
                    <Link href="/Account/ResendEmailConfirmation" className="text-sm text-[var(--color-primary)] hover:underline">
                        Send/Resend Code
                    </Link>
                </div>

                {/* Back to Login */}
                <div className="text-center">
                    <Link href="/Account/Login" className="text-sm text-[var(--color-primary)] hover:underline">
                        Back to Login
                    </Link>
                </div>
            </form>

            {/* Error Modal */}
            {showErrorModal && (
                <>
                    <div className="fixed inset-0 bg-black/30 z-20"></div>
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
