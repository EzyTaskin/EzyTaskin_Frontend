export default function JobListing() {
    return (
        <div className="bg-[#f5f5fa] p-6 rounded-xl shadow-md max-w-lg mx-auto font-sans">
            {/* Header */}
            <div className="flex justify-between items-start">
                <h1 className="text-2xl font-bold text-black">Install kitchen sink basin</h1>
                <span
                    className="bg-[#dcd8ff] text-black font-semibold text-sm rounded-full px-4 py-1 shadow-sm">OPEN</span>
            </div>

            {/* Info + Budget */}
            <div className="flex justify-between mt-4">
                <div className="text-sm text-black space-y-2">
                    <div>
                        <span className="block font-bold text-xs">LOCATION</span>
                        <p>Wollongong</p>
                    </div>
                    <div>
                        <span className="block font-bold text-xs">TO BE DONE ON</span>
                        <p>Tues 8th, 2025</p>
                    </div>
                    <div>
                        <span className="block font-bold text-xs">TIME</span>
                        <p>Morning</p>
                    </div>
                    <div>
                        <span className="block font-bold text-xs">POSTED BY</span>
                        <p>Tracy N.</p>
                    </div>
                </div>
                <div className="bg-[#eae9f3] p-4 rounded-xl text-center shadow-sm">
                    <span className="text-sm text-gray-600 font-medium block">BUDGET</span>
                    <h2 className="text-2xl font-bold text-black mt-1">$500</h2>
                    <button
                        className="mt-3 bg-[#4f46e5] hover:bg-[#4338ca] text-white text-sm font-medium px-4 py-2 rounded-full shadow-md">Make
                        an offer
                    </button>
                </div>
            </div>

            {/* Hiring person */}
            <div className="mt-8">
                <h2 className="font-semibold text-black text-base mb-2">Meet the hiring person</h2>
                <div className="bg-[#eae9f3] rounded-xl p-4 flex justify-between items-center">
                    <span className="font-semibold text-black">Tracy N.</span>
                    <button
                        className="bg-[#4f46e5] hover:bg-[#4338ca] text-white text-sm font-medium px-4 py-2 rounded-full shadow-md">Message
                    </button>
                </div>
            </div>

            {/* About the job */}
            <div className="mt-8">
                <h2 className="font-semibold text-black text-base mb-2">About the job</h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                    Seeking a skilled and detail-oriented Kitchen Sink Basin Installer to join our team. The ideal
                    candidate will be
                    responsible for the installation, alignment, and sealing of kitchen sink basins in residential
                    and/or commercial
                    settings. You will ensure each sink is installed according to plumbing codes and client
                    specifications, with a
                    strong focus on quality and customer satisfaction.
                </p>

                {/* Placeholder images */}
                <div className="flex gap-4 mt-4">
                    <div className="w-20 h-20 bg-[#dcd8ff] rounded-lg"></div>
                    <div className="w-20 h-20 bg-[#dcd8ff] rounded-lg"></div>
                    <div className="w-20 h-20 bg-[#dcd8ff] rounded-lg"></div>
                </div>
            </div>

            {/* Responsibilities */}
            <div className="mt-8">
                <h2 className="font-bold text-black text-lg mb-2">Responsibilities</h2>
                <ul className="list-disc text-sm text-gray-800 pl-5 space-y-1">
                    <li>Remove old sinks and prepare surfaces for new installations.</li>
                    <li>Install a variety of sink types (undermount, top-mount, farmhouse, etc.).</li>
                    <li>Secure and seal sink basins to countertops using appropriate materials.</li>
                    <li>Connect plumbing fixtures including drainpipes, garbage disposals, and faucets.</li>
                    <li>Perform leak tests and ensure watertight sealing.</li>
                    <li>Follow all safety protocols and local plumbing codes.</li>
                    <li>Communicate with clients or supervisors about any issues or modifications.</li>
                    <li>Maintain tools and work area in clean, working condition.</li>
                </ul>
            </div>

            {/* Requirements */}
            <div className="mt-8">
                <h2 className="font-bold text-black text-lg mb-2">Requirements</h2>
                <ul className="list-disc text-sm text-gray-800 pl-5 space-y-1">
                    <li>Proven experience in plumbing or kitchen fixture installation preferred.</li>
                    <li>Knowledge of different sink types and countertop materials (granite, quartz, laminate, etc.).
                    </li>
                    <li>Ability to use tools such as wrenches, silicone guns, sealants, and pipe cutters.</li>
                    <li>Attention to detail and strong problem-solving skills.</li>
                    <li>Ability to lift and maneuver heavy sink basins and materials.</li>
                    <li>Excellent communication and customer service skills.</li>
                    <li>Driver’s license and reliable transportation preferred.</li>
                </ul>
            </div>
        </div>
    );
}
