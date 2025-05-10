'use client'

import React, {useState} from 'react'
import useQueryMessage from "src/app/hooks/useQueryMessages";
import {useSearchParams} from "next/navigation";
import useAuth from "src/app/hooks/useAuth";
import useMutateMessages from "src/app/hooks/useMutateMessages";
import useMutateOffers from "src/app/hooks/useMutateOffers";
import PrimaryModal from "src/app/components/modals/PrimaryModal";

export default function MainContent() {
    const searchParams = useSearchParams();
    const peerId = searchParams.get('peerId');
    const taskId = searchParams.get('taskId');
    const offerId = searchParams.get('offerId');
    const mode = searchParams.get('mode');

    const [showAcceptOfferModal, setShowAcceptOfferModal] = useState(false);

    const {userId: currentUserId} = useAuth();
    const {messages} = useQueryMessage({peerId})
    const messenger = useMutateMessages();
    const [inputMessage, setInputMessage] = useState("");
    const offerer = useMutateOffers();

    if (!messages) return "LOADING"

    const reversedMessage = messages.toReversed();

    const handleSend = () => {
        if (!inputMessage.trim()) return;

        messenger.postMessage(
            {
                peerId
            },
            inputMessage
        );

        setInputMessage("");
    };

    const handleAcceptOffer = () => {
        if (!taskId || !offerId) {
            console.log("No ID");
            return;
        }

        setShowAcceptOfferModal(true);

        offerer.selectOffer({
            requestId: taskId,
            offerId
        })
    }

    const handleCompleteRequest = () => {
        if (!taskId) {
            console.log("No ID");
            return;
        }

        offerer.completeRequest({
            requestId: taskId,
        })
    }

    return (
        <>
            <div className="flex-1 flex flex-col h-[80vh] bg-white">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="text-lg font-semibold">Chat with {peerId}</div>
                    <div className="space-x-4">
                        <button>📞</button>
                        <button>📹</button>
                        {
                            mode === "consumer" ? (
                                <button
                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                                    onClick={handleAcceptOffer}
                                >
                                    Accept Offer
                                </button>
                            ) : mode === "provider" ? (
                                <button
                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                                    onClick={handleCompleteRequest}
                                >
                                    Complete Request
                                </button>
                            ) : null
                        }
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {reversedMessage.map((msg) => {
                        const isSender = msg.sender === currentUserId;

                        return (
                            <div
                                key={msg.id}
                                className={`flex items-start gap-2 ${isSender ? "justify-end" : ""}`}
                            >
                                {!isSender && (
                                    <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0"/>
                                )}
                                <div>
                                    <div
                                        className={`p-3 rounded-xl max-w-md ${
                                            isSender
                                                ? "bg-gray-200 text-black"
                                                : "bg-indigo-600 text-white"
                                        }`}
                                    >
                                        {msg.content}
                                    </div>
                                    <div
                                        className={`text-xs text-gray-500 mt-1 ${
                                            isSender ? "text-right" : ""
                                        }`}
                                    >
                                        {new Date(msg.timestamp).toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </div>
                                </div>
                                {isSender && (
                                    <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0"/>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Input */}
                <div className="p-4 border-t flex items-center">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Type something"
                        className="flex-1 px-4 py-2 border rounded"
                    />
                    <button onClick={handleSend} className="ml-2 text-indigo-600">➤</button>
                </div>
            </div>
            <PrimaryModal showModal={showAcceptOfferModal} setShowModal={setShowAcceptOfferModal}>
                <h1> Hey </h1>
            </PrimaryModal>
        </>
    );
}
