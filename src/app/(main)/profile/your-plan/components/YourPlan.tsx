"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import PaymentCardModal from "./modal/PaymentCardModal";
import useQuerySubscription from "src/app/hooks/useQuerySubscription";
import { useQueryCards } from "src/app/hooks/useQueryCards";
import useMutateDeActivate from "src/app/hooks/useMutateDeActivate";
import useActivatePremium from "src/app/hooks/useMutateActivate";

const standardFeatures = [
  "Everything in free\nKeep 100% of what you earn. No surprise deductions when you complete a task.",
  "Browse Available Tasks\nView and explore open tasks in your area that match your service category.",
  "Apply for Tasks\nSend offers and communicate with clients to secure work.",
  "Ratings & Reviews System\nBuild your reputation with client feedback after completing tasks.",
];

const premiumFeatures = [
  "No Transaction Fees\nKeep 100% of what you earn. No surprise deductions when you complete a task.",
  "Priority in Receiving Task Requests\nBe among the first to see and respond to new tasks in your area, increasing your chances of landing more work.",
  "Early Access to New Features\nBe the first to try and benefit from the latest platform features and tools before anyone else.",
  "Premium Badge on Your Profile\nShow potential clients you’re a top-tier provider and build more trust instantly.",
];

export default function YourPlan() {
  const [showModal, setShowModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const { isSubscriptionActive } = useQuerySubscription();
  const { cards } = useQueryCards();
  const { handlePlanChange, cancelPlanChange, shouldShowModal } = useMutateDeActivate();
  const { handleCardSelect } = useActivatePremium();

  const onSubscribe = useCallback(async () => {
    await handlePlanChange(true);
  }, [handlePlanChange]);

  const onDowngrade = useCallback(async () => {
    await handlePlanChange(false);
    setShowCancelModal(false); // hide cancel modal directly after deactivation
  }, [handlePlanChange, setShowCancelModal]);

  useEffect(() => {
    console.log(shouldShowModal);
    setShowModal(shouldShowModal);
  }, [shouldShowModal]);

  const renderFeatures = (features: string[]) =>
    features.map((item, index) => {
      const [title, desc] = item.split("\n");
      return (
        <div key={index} className="flex gap-2 items-start mb-2">
          <Image
            width={18}
            height={18}
            src="/check-icon.svg"
            alt="check"
            className="pt-1"
          />
          <div>
            <p className="text-[var(--color-primary)] font-medium">{title}</p>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        </div>
      );
    });

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Upgrade your Plan</h1>
      <p className="text-muted-foreground mb-8">
        Choose the right plan for your needs and take advantage of our Premium
        features.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Standard Plan */}
        <div
          className={`rounded-2xl p-6 shadow-sm ${
            !isSubscriptionActive
              ? "m-10 border border-gray-400"
              : "bg-[var(--color-primary)]/10 mb-5 pt-14 border border-[var(--color-primary)]"
          }`}
        >
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl text-gray-700 font-semibold">Standard</p>
            <p className="text-base text-muted-foreground">
              Perfect for Beginners
            </p>
            <p className="text-5xl font-bold mt-2">Free</p>
          </div>
          <div className="mt-4">{renderFeatures(standardFeatures)}</div>
          <div className="mt-6 flex justify-center">
            {!isSubscriptionActive ? (
              <PrimaryButton
                label="Your current plan"
                bgColor="bg-[#DBDBDB]"
                width="w-4xs"
                textColor="text-gray-400"
                textSize="text-base"
                borderRadius="rounded-2xl"
              />
            ) : (
              <PrimaryButton
                label="Downgrade"
                width="w-3xs"
                bgColor="bg-[var(--color-primary)]"
                textColor="text-white"
                fontStyle="font-bold"
                onClick={() => setShowCancelModal(true)}
              />
            )}
            {showCancelModal && (
              <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl">
                  <h2 className="text-xl font-bold text-center mb-6 text-[#3136c1]">
                    Are you sure to cancel your Premium Subscription?
                  </h2>
                  <div className="flex justify-end space-x-4">
                    <button
                      className="text-black font-medium"
                      onClick={() => setShowCancelModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-[#3136c1] text-white px-4 py-2 rounded-xl"
                      onClick={async () => {
                        onDowngrade(); // your existing handler
                      }}
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Premium Plan */}
        <div
          className={`border border-[var(--color-primary)] rounded-2xl p-6 shadow-sm ${
            isSubscriptionActive
              ? "m-12 border border-gray-400"
              : "bg-[var(--color-primary)]/10 mb-5 pt-8 border border-[var(--color-primary)]"
          }`}
        >
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl text-gray-700 font-semibold">Premium</p>
            <p className="text-sm text-muted-foreground">
              Great for Regular Users
            </p>
            <p className="text-5xl font-bold mt-2">
              $8.99/<span className="text-base font-semibold">monthly</span>
            </p>
          </div>
          <div className="mt-4">{renderFeatures(premiumFeatures)}</div>
          <div className="mt-6 flex justify-center">
            {isSubscriptionActive ? (
              <PrimaryButton
                label="Your current plan"
                bgColor="bg-[#DBDBDB]"
                width="w-4xs"
                textColor="text-gray-400"
                textSize="text-base"
                borderRadius="rounded-2xl"
              />
            ) : (
              <PrimaryButton
                label="Subscribe"
                width="w-3xs"
                bgColor="bg-[var(--color-primary)]"
                textColor="text-white"
                fontStyle="font-bold"
                onClick={async () => await onSubscribe()}
              />
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <PaymentCardModal
          cards={cards}
          onClose={() => cancelPlanChange()}
          onSelect={handleCardSelect}
        />
      )}
    </div>
  );
}
