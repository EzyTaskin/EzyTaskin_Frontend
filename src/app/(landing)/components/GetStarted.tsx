"use client";

import PrimaryButton from "src/app/components/buttons/PrimaryButton";

export default function GetStarted() {
  return (
    <section className="bg-(--color-primary) py-16">
      <div className="text-center md:text-left space-y-6 flex flex-col">
        <div className="flex justify-center">
          <h1 className="text-5xl font-bold text-white">
            Ready to get started with EzyTaskin?
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-2xl text-white">
            Join thousands of satisfied users who are getting things done with
            our platform everyday.
          </p>
        </div>
      </div>
    </section>
  );
}
