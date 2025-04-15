"use client";

import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { GoEye, GoEyeClosed } from "react-icons/go";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="py-28 flex items-center justify-center min-h-screen">
            <div className="bg-(--color-tertiary) p-8 rounded-[15px] shadow-lg w-2.5/6">
                <h2 className="text-[48px] font-bold text-center">Add payment method</h2>
                <p className="text-center text-gray-700 text-[20px] mb-6">
                    Note: Some payment providers issue a temporary authorization charge.
                </p>

                <div className="mb-4">
                    <label className="block text-[22px] font-medium mb-1">Card number</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
                        <MdOutlineMail className="text-gray-500 text-[22px]" />
                        <input
                            type="text"
                            placeholder="0123 4567 8987 6543"
                            className="text-gray-700 ml-2 w-full outline-none bg-transparent text-[20px]"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-[22px] font-medium mb-1">Expiration Date</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
                        <MdOutlineMail className="text-gray-500 text-[22px]" />
                        <input
                            type="text"
                            placeholder="12/25"
                            className="text-gray-700 ml-2 w-full outline-none bg-transparent text-[20px]"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-[22px] font-medium mb-1">CVC</label>
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

                <div className="mb-4">
                    <label className="block text-[22px] font-medium mb-1">Cardholder Name</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
                        <MdOutlineMail className="text-gray-500 text-[22px]" />
                        <input
                            type="text"
                            placeholder="John Johnson"
                            className="text-gray-700 ml-2 w-full outline-none bg-transparent text-[20px]"
                        />
                    </div>
                </div>

                <div className="my-10 flex justify-center">
                    <PrimaryButton
                        label="Add"
                        width="w-[150px]"
                        borderRadius="rounded-[10px]"
                    />
                </div>
            </div>
        </div>
    );
}
