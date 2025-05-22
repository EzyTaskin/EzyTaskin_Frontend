"use client";
import {useState} from "react";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import {TasksResponseType} from "src/app/constants/type";
import useMutateOffers from "src/app/hooks/useMutateOffers";
import Link from "next/link";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import useQueryProvider from "src/app/hooks/useQueryProvider";
import PrimaryModal from "src/app/components/modals/PrimaryModal";
import {redirect} from "next/navigation";
import {useQueryCards} from "src/app/hooks/useQueryCards";
import useAuth from "src/app/hooks/useAuth";
import useQueryTask from "src/app/hooks/useQueryTask";

dayjs.extend(relativeTime);

const JobListing = ({task}: { task: TasksResponseType }) => {
    const {userId: currentUserId} = useAuth();
    const [showOfferModal, setShowOfferModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [offerValue, setOfferValue] = useState(task.budget);
    const {providerProfile} = useQueryProvider();
    const {cards} = useQueryCards();
    const offerer = useMutateOffers();
    const taskQuery = useQueryTask({});

    const handleConfirmOffer = () => {
        setShowOfferModal(false);
        setShowSuccessModal(true);
        if (providerProfile.isPremium)
            offerer.postOffer({
                requestId: task.id,
                price: offerValue
            })
        else
            offerer.postOffer({
                requestId: task.id,
            })
    };

    const handleMakeAnOffer = async (budget: number, taskId: string) => {
        const currentTask = await taskQuery.getTask({
            requestId: taskId
        });
        const offers = currentTask.offers;
        const hasMatch = offers.some(offer => offer.provider.account.includes(currentUserId));
        if (hasMatch) {
            setShowErrorModal(true)
            return;
        }
        setOfferValue(budget)
        setShowOfferModal(true)
    }

    const OfferModalContent = () => {
        if (cards.length === 0) {
            return (
                <>
                    <h2 className="text-xl font-bold text-red-500 mb-4 text-center flex items-center space-x-2">
                        <span>You have no payment method. Please add one before making offers</span>
                    </h2>
                    <div className="flex justify-end mt-6 space-x-4">
                        <button
                            onClick={() => setShowOfferModal(false)}
                            className="text-black font-medium"
                        >
                            Close
                        </button>
                    </div>
                </>
            )
        }
        return (
            <div>
                <h2 className="text-xl font-bold text-indigo-700 mb-4 flex items-center space-x-2">
                    <span>Make Your Deal</span>
                </h2>

                <div className="flex justify-between mb-2 text-sm text-black">
                    <span>{`$0`}</span>
                    <span className="text-gray-500"> <span
                        className="bg-grey-200">Offer: </span> ${offerValue}</span>
                    <span>{`$${task.budget}`}</span>
                </div>

                <input
                    type="range"
                    min={0}
                    max={task.budget}
                    step="1"
                    value={offerValue}
                    onChange={(e) => setOfferValue(Number(e.target.value))}
                    className="w-full accent-indigo-600"
                />

                {providerProfile.isPremium ?
                    <div className="mt-6 text-sm text-black">
                        <div className="flex justify-between mb-1 text-gray-600">
                            <span>Transaction fee (Premium Provider)</span>
                            <span>-$0.00</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg">
                            <span>You’ll receive</span>
                            <span>${offerValue} </span>
                        </div>
                    </div> :
                    <div className="mt-6 text-sm text-black">
                        <div className="flex justify-between mb-1 text-gray-600">
                            <span>Transaction fee</span>
                            <span>{`-$${(offerValue * 0.1).toFixed(2)}`}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg">
                            <span>You’ll receive</span>
                            <span>{`$${(offerValue * 0.9).toFixed(2)}`}</span>
                        </div>
                    </div>}

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
        )
    }

    return (
        <div className="bg-[#F5F6FA] p-6 rounded-xl shadow-md max-w-lg mx-auto relative">
            {/* Header */}
            <div className="flex justify-between items-start">
                <h1 className="text-2xl font-bold text-black">{task.title}</h1>
                <PrimaryButton
                    label="OPEN"
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
                        <span className="font-bold text-s">POSTED BY</span>
                        <p>{task.consumer.name}</p>
                    </div>
                    {task.dueDate &&
                        <div>
                            <span className="font-bold text-s">TO BE DONE ON</span>
                            <p>
                                {dayjs(task.dueDate).fromNow()}
                            </p>
                        </div>
                    }
                </div>
                <div className="bg-[#E7E4E4] p-4 rounded-xl text-center shadow-sm h-[8rem] mt-12 w-4xs">
                    <span className="text-sm text-gray-600 font-medium block">BUDGET</span>
                    <h2 className="text-2xl font-bold text-black mt-1">${task.budget}</h2>
                    {task.consumer.account != currentUserId ?
                        <button
                            onClick={() => handleMakeAnOffer(task.budget, task.id)}
                            className="mt-3 bg-[#4f46e5] hover:bg-[#4338ca] text-white text-sm font-medium px-4 py-2 rounded-full shadow-md"
                        >
                            Make an offer
                        </button>
                        :
                        <button
                            className="mt-3 bg-[#4f46e5] hover:bg-[#4338ca] text-white text-sm font-medium px-4 py-2 rounded-full shadow-md"
                        >
                            This is your request
                        </button>
                    }
                </div>
            </div>

            {/* Hiring person */}
            <div className="mt-8">
                {task.consumer.account != currentUserId ?
                    <Link href={`/chat?peerId=${task.consumer.account}&taskId=${task.id}&mode=provider`}>
                        <button
                            className="bg-(--color-primary) text-white font-semibold text-lg px-6 py-2 rounded-2xl shadow-md hover:bg-blue-700 transition duration-300">
                            Meet the hiring person
                        </button>
                    </Link>
                    :
                    <Link href={`/my-requests/details?taskId=${task.id}`}>
                        <button
                            className="bg-(--color-primary) text-white font-semibold text-lg px-6 py-2 rounded-2xl shadow-md hover:bg-blue-700 transition duration-300">
                            See task details
                        </button>
                    </Link>
                }
                {/* Placeholder */}
            </div>

            {/* About the job */}
            <div className="mt-8">
                <h2 className="font-semibold text-black text-lg mb-2">About the job</h2>
                <p className="text-sm text-gray-700 leading-relaxed">{task.description}</p>
            </div>

            <PrimaryModal showModal={showOfferModal} setShowModal={setShowOfferModal} showCloseButton={false}>
                <OfferModalContent/>
            </PrimaryModal>

            <PrimaryModal showModal={showSuccessModal} setShowModal={setShowSuccessModal} showCloseButton={false}>
                <h2 className="text-xl font-bold text-indigo-700 mb-2">
                    Your deal has been submitted successfully!
                </h2>
                <p className="text-black text-base mb-6">Please wait for acceptance from the poster</p>

                <div className="flex justify-end space-x-4">
                    <button
                        onClick={() => setShowSuccessModal(false)}
                        className="text-black font-medium"
                    >
                        Close
                    </button>
                    <button
                        onClick={() => {
                            redirect(`/chat?peerId=${task.consumer.account}&taskId=${task.id}&mode=provider`);
                        }}
                        className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-indigo-700 transition"
                    >
                        View task
                    </button>
                </div>
            </PrimaryModal>
            <PrimaryModal showModal={showErrorModal} setShowModal={setShowErrorModal}>
                <h1 className="px-8"> You have already offer to this request</h1>
            </PrimaryModal>
        </div>
    );
};

export default JobListing;
