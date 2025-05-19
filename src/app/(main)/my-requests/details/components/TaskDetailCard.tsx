import React, {useState} from "react";
import {MapPin, Calendar, User, Eye, DollarSign} from "lucide-react";
import {TaskResponseType} from "src/app/constants/type";
import Link from "next/link";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PrimaryModal from "src/app/components/modals/PrimaryModal";
import useMutateReviews from "src/app/hooks/useMutateReviews";

dayjs.extend(relativeTime);

export default function TaskDetailCard({task}: { task: TaskResponseType }) {
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [reviewDescription, setReviewDescription] = useState("");
    const reviewer = useMutateReviews();
    console.log(task)
    const handleConfirm = () => {
        reviewer.postReview({
            requestId: task.id,
            description: reviewDescription,
            rating
        })
        setShowReviewModal(false);
        setShowSuccessModal(true);
    };

    if (!task) return <h1>
        Loading...
    </h1>

    const handleReview = () => {
        setShowReviewModal(true);
    }

    return (
        <>
            <div className="bg-[#F3F3FF] p-6 rounded-3xl max-w-7xl mx-auto">
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl font-bold">{task.title}</h2>
                    {!task.completedDate &&
                        <span className="bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow">
          OPEN
        </span>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                    <div className="flex space-x-1 items-baseline">
                        <MapPin className="text-gray-500 mt-1" size={15}/>
                        <div>
                            <p className="text-base text-gray-500">LOCATION</p>
                            <p className="font-semibold">{task.location}</p>
                        </div>
                    </div>

                    <div className="flex items-baseline space-x-1">
                        <Calendar className="text-gray-500 mt-1" size={15}/>
                        <div>
                            <p className="text-base text-gray-500">TO BE DONE ON</p>
                            <p className="font-semibold">{dayjs(task.dueDate).fromNow()}</p>
                        </div>
                    </div>

                    <div className="flex items-baseline space-x-1">
                        <DollarSign className="text-gray-500 mt-1" size={15}/>
                        <div>
                            <p className="text-base text-gray-500">BUDGET</p>
                            <p className="font-semibold">{task.budget}</p>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <p className="font-semibold mb-1">Applicants</p>
                    <div className="flex space-x-2 mb-3">
                        {task.offers.map((offer) => {
                            return (
                                <Link key={offer.id}
                                      href={`/chat?peerId=${offer.provider.account}&offerId=${offer.id}&taskId=${task.id}&mode=consumer`}>
                                    <div className="w-7 h-7 rounded-full bg-indigo-600"></div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                {task.selected && <div className="mb-4">
                    <p className="font-semibold mb-1">Selected</p>
                    <div className="flex space-x-2 mb-3">
                        <Link
                            href={`/chat?peerId=${task.selected.provider.account}&taskId=${task.id}&mode=consumer`}>
                            <div className="w-7 h-7 rounded-full bg-indigo-600"></div>
                        </Link>
                        <button
                            onClick={handleReview}
                            className="px-3 py-1.5 bg-yellow-400 text-yellow-900 font-semibold rounded-md shadow-sm
             hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300
             transition duration-200 ease-in-out text-sm"
                        >
                            Review
                        </button>
                    </div>
                </div>}
            </div>

            <PrimaryModal showModal={showReviewModal} setShowModal={setShowReviewModal} showCloseButton={false}>
                <div>
                    <h3 className="text-lg font-semibold mb-3">Rate Your Experience</h3>
                    <textarea
                        value={reviewDescription}
                        onChange={(e) => setReviewDescription(e.target.value)}
                        placeholder="Share your experience"
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-indigo-500 rounded-xl shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-400 transition placeholder-gray-400 resize-none"
                    />

                    <div className="flex space-x-1 mb-4 justify-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                className={`text-4xl transition-colors ${
                                    (hover || rating) >= star ? "text-yellow-400" : "text-gray-300"
                                } focus:outline-none`}
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                                aria-label={`${star} Star${star > 1 ? "s" : ""}`}
                            >
                                ★
                            </button>
                        ))}
                    </div>

                    <div className="flex space-x-3">
                        <button
                            onClick={handleConfirm}
                            className="flex-1 bg-yellow-400 text-yellow-900 font-semibold py-2 rounded-md
                     hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300
                     transition duration-200 ease-in-out"
                        >
                            Confirm
                        </button>

                        <button
                            onClick={() => setShowReviewModal(false)}
                            className="flex-1 bg-gray-300 text-gray-700 font-semibold py-2 rounded-md
                     hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400
                     transition duration-200 ease-in-out"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </PrimaryModal>
            <PrimaryModal showModal={showSuccessModal} setShowModal={setShowSuccessModal} showCloseButton={false}>
                <div className="p-6 max-w-sm w-full text-center">
                    <div className="mb-4">
                        <svg
                            className="mx-auto h-12 w-12 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                    </div>
                    <h2 className="text-lg font-semibold mb-2 text-gray-900">Success!</h2>
                    <p className="mb-6 text-gray-700">Review Submitted Success</p>
                    <button
                        onClick={() => setShowSuccessModal(false)}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600
                     focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                    >
                        Close
                    </button>
                </div>
            </PrimaryModal>
        </>
    );
}
