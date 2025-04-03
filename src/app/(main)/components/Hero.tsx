'use client'

import PrimaryButton from "src/app/components/buttons/PrimaryButton";

export default function Hero() {
    return (
        <section className="bg-(--color-tertiary) py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6">
                <div className="text-center md:text-left space-y-6">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Get any task done, <span className="text-primary">effortlessly</span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        Connect with skilled providers for all your needs. Post a task, get quotes, and hire
                        trusted professionals.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <PrimaryButton/>
                        <PrimaryButton/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        src="/hero-image.png"
                        alt="Task Assistance"
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
}
