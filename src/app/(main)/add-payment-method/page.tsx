"use client";

import {useState} from "react";
import {MdOutlineMail} from "react-icons/md";
import {CiLock} from "react-icons/ci";
import {GoEye, GoEyeClosed} from "react-icons/go";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import {PaymentSendCardType} from "src/app/constants/type";
import useMutateCard from "src/app/hooks/useMutateCard";
import PrimaryModal from "src/app/components/modals/PrimaryModal";
import {redirect} from "next/navigation";
import InputMask from 'react-input-mask';
import Cleave from 'cleave.js/react';

export default function AddPaymentMethod() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState<PaymentSendCardType>({
        number: "",
        expiry: "",
        cvv: "",
        name: "",
    });
    const {handleAddPayment} = useMutateCard();
    const [formModalMessage, setFormModalMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleInputChange = (
        field: keyof PaymentSendCardType,
        value: string
    ) => {
        setFormData((prev) => ({...prev, [field]: value}));
    };

    const handleCloseModal = () => {
        if (isSuccess) redirect('/profile');
    }

    const handleSubmit = async () => {
        const res = await handleAddPayment(formData);
        console.log(res);
        if (res.success) {
            setFormModalMessage("Add Payment Method Successfully");
            setIsSuccess(true);
            setShowModal(true)
        } else {
            if (typeof res.message === "string") setFormModalMessage(res.message);
            else {
                let errorString = res.message.title;
                for (const error in res.message.errors) {
                    errorString += "\n" + error + ": " + res.message.errors[error];
                }
                setFormModalMessage(errorString);
            }
            setShowModal(true)
        }
    };

    return (
        <>
            <div className="py-28 flex items-center justify-center min-h-screen">
                <div className="bg-(--color-tertiary) p-8 rounded-[15px] shadow-lg w-2.5/6">
                    <h2 className="text-[48px] font-bold text-center">
                        Add payment method
                    </h2>
                    <p className="text-center text-gray-700 text-[20px] mb-6">
                        Note: Some payment providers issue a temporary authorization charge.
                    </p>

                    {/* Card Number */}
                    <div className="mb-4">
                        <label className="block text-[22px] font-medium mb-1">
                            Card number *
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
                            <MdOutlineMail className="text-gray-500 text-[22px]"/>
                            <Cleave
                                options={{ creditCard: true }}
                                placeholder="0123 4567 8901 2345"
                                className="text-gray-700 ml-2 w-full outline-none bg-transparent text-[20px]"
                                value={formData.number}
                                onChange={(e) => handleInputChange("number", e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Expiry */}
                    <div className="mb-4">
                        <label className="block text-[22px] font-medium mb-1">
                            Expiration Date *
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
                            <MdOutlineMail className="text-gray-500 text-[22px]"/>
                            <Cleave
                                options={{ date: true, datePattern: ['m', 'y'] }}
                                placeholder="12/25"
                                className="text-gray-700 ml-2 w-full outline-none bg-transparent text-[20px]"
                                value={formData.expiry}
                                onChange={(e) => handleInputChange("expiry", e.target.value)}
                            />
                        </div>
                    </div>

                    {/* CVV */}
                    <div className="mb-4">
                        <label className="block text-[22px] font-medium mb-1">CVC *</label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
                            <CiLock className="text-gray-600 text-[25px]"/>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="123"
                                className="text-gray-700 ml-2 w-full outline-none bg-transparent text-[20px]"
                                value={formData.cvv}
                                onChange={(e) => handleInputChange("cvv", e.target.value)}
                                required
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

                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-[22px] font-medium mb-1">
                            Cardholder Name *
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
                            <MdOutlineMail className="text-gray-500 text-[22px]"/>
                            <input
                                type="text"
                                placeholder="John Johnson"
                                className="text-gray-700 ml-2 w-full outline-none bg-transparent text-[20px]"
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="my-10 flex justify-center">
                        <PrimaryButton
                            label="Add"
                            width="w-[150px]"
                            borderRadius="rounded-[10px]"
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </div>
            <PrimaryModal showModal={showModal} setShowModal={setShowModal} onCloseModal={handleCloseModal}>
                <h1 className="whitespace-pre-line">{formModalMessage}</h1>
            </PrimaryModal>
        </>
    );
}
