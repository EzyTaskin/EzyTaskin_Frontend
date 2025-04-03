'use client'

import PrimaryButton from "src/app/components/buttons/PrimaryButton";

export default function GetStarted() {
    return (
        <section className="bg-(--color-primary) py-16">
            <div className="text-center md:text-left space-y-6 flex flex-col">
                <div className="flex justify-center">
                    <h1 className="text-4xl font-bold text-white">
                        What Our Users Say
                    </h1>
                </div>
                <div className="flex justify-center">
                    <p className="text-lg text-white">
                        Real experiences from people who’ve used EzyTaskin
                    </p>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 px-6 pt-12">
                <PrimaryButton/>
                <PrimaryButton/>
            </div>
        </section>
    );
}
