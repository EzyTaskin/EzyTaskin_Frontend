"use client";
import {useState} from "react";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import {TaskResponseType} from "src/app/constants/type";
import useMutateOffers from "src/app/hooks/useMutateOffers";

const JobListing = ({task}: { task: TaskResponseType }) => {
    const [showOfferModal, setShowOfferModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [offerValue, setOfferValue] = useState(task.budget);
    const offerer = useMutateOffers();

    const handleConfirmOffer = () => {
        setShowOfferModal(false);
        setShowSuccessModal(true);
        offerer.postOffer({
            requestId: task.id,
            // price: offerValue
        })
    };

    return (
        <div className="bg-[#F5F6FA] p-6 rounded-xl shadow-md max-w-lg mx-auto relative">
            {/* Header */}
            <div className="flex justify-between items-start">
                <h1 className="text-2xl font-bold text-black">{task.title}</h1>
                <PrimaryButton
                    textSize="text-sm"
                    width="w-4xs"
                    bgColor="bg-[#dcd8ff]"
                    textColor="text-black"
                    fontStyle="font-bold"
                />
            </div>

            {/* Info + Budget */}
            <div className="flex justify-between mt-4">
                <div className="text-sm text-black space-y-2">
                    <div>
                        <span className="font-bold text-s">LOCATION</span>
                        <p>{task.location}</p>
                    </div>
                    <div>
                        <span className="font-bold text-s">TO BE DONE ON</span>
                        <p>{task.dueDate}</p>
                    </div>
                </div>
                <div className="bg-[#E7E4E4] p-4 rounded-xl text-center shadow-sm h-[8rem] mt-12 w-4xs">
                    <span className="text-sm text-gray-600 font-medium block">BUDGET</span>
                    <h2 className="text-2xl font-bold text-black mt-1">${task.budget}</h2>
                    <button
                        onClick={() => setShowOfferModal(true)}
                        className="mt-3 bg-[#4f46e5] hover:bg-[#4338ca] text-white text-sm font-medium px-4 py-2 rounded-full shadow-md"
                    >
                        Make an offer
                    </button>
                </div>
            </div>

            {/* Hiring person */}
            <div className="mt-8">
                <h2 className="font-semibold text-black text-lg mb-2">Meet the hiring person</h2>
                {/* Placeholder */}
            </div>

            {/* About the job */}
            <div className="mt-8">
                <h2 className="font-semibold text-black text-lg mb-2">About the job</h2>
                <p className="text-sm text-gray-700 leading-relaxed">{task.description}</p>
            </div>

            {/* Offer Modal */}
            {showOfferModal && (
                <>
                    <div className="fixed inset-0 bg-black/30 z-20"></div>
                    {/* Modal itself */}
                    <div className="fixed inset-0 flex items-center justify-center z-30">
                        <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-md">
                            <h2 className="text-xl font-bold text-indigo-700 mb-4 flex items-center space-x-2">
                                <span>Make Your Deal</span>
                            </h2>

                            <div className="flex justify-between mb-2 text-sm text-black">
                                <span>{`$0`}</span>
                                <span>${offerValue}</span>
                                <span>{`$${task.budget}`}</span>
                            </div>

                            <input
                                type="range"
                                min={0}
                                max={task.budget}
                                step="10"
                                value={offerValue}
                                onChange={(e) => setOfferValue(Number(e.target.value))}
                                className="w-full accent-indigo-600"
                            />

                            <div className="flex justify-end mt-6 space-x-4">
                                <button
                                    onClick={() => setShowOfferModal(false)}
                                    className="text-black font-medium"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={handleConfirmOffer}
                                    className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-indigo-700 transition"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Success Modal */}
            {showSuccessModal && (
                <>
                    <div className="fixed inset-0 bg-black/30 z-20"></div>
                    <div className="fixed inset-0 flex items-center justify-center z-30">
                        <div className="bg-[#f3f6fb] p-6 rounded-2xl shadow-xl w-[90%] max-w-md">
                            <h2 className="text-xl font-bold text-indigo-700 mb-2">
                                Your deal has been submitted successfully!
                            </h2>
                            <p className="text-black text-base mb-6">Wait for acceptance...</p>

                            <div className="flex justify-end space-x-4">
                                <button
                                    onClick={() => setShowSuccessModal(false)}
                                    className="text-black font-medium"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={() => {
                                        console.log("Viewing task");
                                        // Optionally navigate or do something
                                        setShowSuccessModal(false);
                                    }}
                                    className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-indigo-700 transition"
                                >
                                    View task
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default JobListing;
