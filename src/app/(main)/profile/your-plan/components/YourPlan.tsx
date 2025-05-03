"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import PrimaryButton from "src/app/components/buttons/PrimaryButton";
import { ProviderProfileType } from "src/app/constants/type";
import { fetchApi } from "src/app/helpers/api/request";

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
  const searchParams = useSearchParams();
  const queryPremium = searchParams.get("isPremium");

  const [isPremium, setIsPremium] = useState(false);
  const [providerProfile, setProviderProfile] =
    useState<ProviderProfileType>(null);
  const handlePlanChange = async (newPremiumStatus: boolean) => {
    try {
      const response = await fetchApi({
        path: "/Profile/Provider",
        method: "GET",
      }).then((res) => res.json());
      const currentProfile = response;
      console.log(currentProfile);

      // Use `data` instead of `body` to match the expected format
      await fetchApi({
        path: "/Profile/Provider",
        method: "PATCH",
        data: {
          ...currentProfile,
          isPremium: newPremiumStatus,
        }, // Change body to data
      });

      setProviderProfile({
        ...currentProfile,
        isPremium: newPremiumStatus,
      });
      setIsPremium(newPremiumStatus);
    } catch (error) {
      console.error("Error updating plan", error);
    }
  };

  // Logic to set the isPremium state based on the URL parameter
  useEffect(() => {
    if (queryPremium === "true") {
      setIsPremium(true);
    } else {
      setIsPremium(false);
    }
  }, [queryPremium]);

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
      <h1 className="text-2xl font-bold mb-2">Upgrade your plan</h1>
      <p className="text-muted-foreground mb-8">
        Choose the right plan for your needs and take advantage of our premium
        features.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Standard Plan */}
        <div
          className={`rounded-2xl p-6 shadow-sm ${
            !isPremium
              ? "m-10 border border-gray-400"
              : "bg-[var(--color-primary)]/10 mb-5 pt-14 border border-[var(--color-primary)]"
          }`}
        >
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl text-gray-700 font-semibold">Standard</p>
            <p className="text-base text-muted-foreground">
              Perfect for beginners
            </p>
            <p className="text-5xl font-bold mt-2">Free</p>
          </div>
          <div className="mt-4">{renderFeatures(standardFeatures)}</div>
          <div className="mt-6 flex justify-center">
            {!isPremium ? (
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
                onClick={async () => await handlePlanChange(false)}
              />
            )}
          </div>
        </div>

        {/* Premium Plan */}
        <div
          className={`border border-[var(--color-primary)] rounded-2xl p-6 shadow-sm ${
            isPremium
              ? "m-12 border border-gray-400"
              : "bg-[var(--color-primary)]/10 mb-5 pt-8 border border-[var(--color-primary)]"
          }`}
        >
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl text-gray-700 font-semibold">Premium</p>
            <p className="text-sm text-muted-foreground">
              Great for regular users
            </p>
            <p className="text-5xl font-bold mt-2">
              $8.99/<span className="text-base font-semibold">monthly</span>
            </p>
          </div>
          <div className="mt-4">{renderFeatures(premiumFeatures)}</div>
          <div className="mt-6 flex justify-center">
            {isPremium ? (
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
                onClick={async () => await handlePlanChange(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
