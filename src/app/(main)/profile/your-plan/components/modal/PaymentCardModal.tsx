"use client";

import React from "react";
import {PaymentReceiveCardType} from "src/app/constants/type";
import {X} from "lucide-react";

type PaymentCardModalProps = {
    cards: PaymentReceiveCardType[];
    onClose: () => void;
    onSelect: (paymentMethod: string) => void;
};

export default function PaymentCardModal({
                                             cards,
                                             onClose,
                                             onSelect,
                                         }: PaymentCardModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <X size={20}/>
                </button>

                <h2 className="text-xl font-semibold mb-4 text-center">
                    Choose a payment card
                </h2>

                {/* Card List */}
                <div className="space-y-3 max-h-60 overflow-y-auto">
                    {cards.length === 0 && (
                        <p className="text-gray-500 text-sm text-center">
                            No saved cards found.
                        </p>
                    )}

                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="border rounded-xl p-4 flex justify-between items-center hover:border-[var(--color-primary)] transition cursor-pointer"
                            onClick={() => onSelect(card.id)}
                        >
                            <div>
                                <p className="text-sm font-medium">
                                    **** **** **** {card.number.slice(-4)}
                                </p>
                                <p className="text-xs text-gray-500">{card.name}</p>
                                <p className="text-xs text-gray-500">Expires {card.expiry}</p>
                            </div>
                            <div className="text-sm text-[var(--color-primary)] font-bold">
                                Select
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
