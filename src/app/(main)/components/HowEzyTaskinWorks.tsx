'use client'

function StepsCard() {
    return (
        <div className="w-64 p-6 shadow-lg rounded-2xl border border-gray-200">
            <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-8 h-8 text-violet-600"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.232 5.232a2.828 2.828 0 114 4L7.5 21H3v-4.5l12.232-12.268z"
                        />
                    </svg>
                </div>
                <div
                    className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full text-lg font-bold">
                    1
                </div>
                <h2 className="text-lg font-semibold">Post a task</h2>
                <p className="text-gray-500 text-sm">
                    Describe what you need done, when and where you need it, and provide your budget.
                </p>
            </div>
        </div>
    )
}

export default function HowEzyTaskinWorks() {
    return (
        <section className="bg-(--color-tertiary) py-16">
            <div className="text-center md:text-left space-y-6 flex flex-col">
                <div className="flex justify-center">
                    <h1 className="text-4xl font-bold text-gray-900">
                        How EzyTaskin works
                    </h1>
                </div>
                <div className="flex justify-center">
                    <p className="text-lg text-gray-600">
                        A simple, reliable way to get your tasks done
                    </p>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 items-center gap-8 px-6 pt-12">
                <StepsCard/>
                <StepsCard/>
                <StepsCard/>
                <StepsCard/>
            </div>
        </section>
    );
}
