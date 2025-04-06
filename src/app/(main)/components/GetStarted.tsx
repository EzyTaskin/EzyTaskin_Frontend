"use client";

import PrimaryButton from "src/app/components/buttons/PrimaryButton";

export default function GetStarted() {
  return (
    <section className="bg-(--color-primary) py-16">
      <div className="text-center md:text-left space-y-6 flex flex-col">
        <div className="flex justify-center">
          <h1 className="text-[48px] font-bold text-white">
            Ready to get started with EzyTaskin?
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-[32px] text-white">
            Join thousands of satisfied users who are getting things done with
            our platform everyday.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-30 pt-12">
        <PrimaryButton
          bgColor="bg-white"
          width="w-[173px]"
          textColor="text-[var(--color-primary)]"
          borderRadius="rounded-[15px]"
          fontStyle="font-bold"
        />
        <PrimaryButton
          label="Become A Provider"
          width="w-[273px]"
          borderRadius="rounded-[15px]"
          bgColor="bg-[var(--color-primary)]"
          borderStyle="border border-white"
          textColor="text-white"
          fontStyle="font-bold"
        />
      </div>
    </section>
  );
}
