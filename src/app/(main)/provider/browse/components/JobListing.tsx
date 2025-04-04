export default function JobListing() {
    return (
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg max-w-lg mx-auto">
            {/* Job Title and Status */}
            <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold">Install Kitchen Sink Basin</h2>
                <span className="bg-purple-200 text-purple-800 px-4 py-1 rounded-full text-sm font-semibold">OPEN</span>
            </div>

            {/* Job Details */}
            <div className="mt-4 text-gray-700">
                <div className="flex items-center gap-2">
                    <span className="font-semibold">📍 Location:</span> Wollongong
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <span className="font-semibold">📅 To Be Done On:</span> Tues 8th, 2025
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <span className="font-semibold">⏰ Time:</span> Morning
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <span className="font-semibold">👤 Posted By:</span> Tracy N.
                </div>
            </div>

            {/* Budget Section */}
            <div className="bg-gray-200 p-4 rounded-lg mt-4 flex justify-between items-center">
                <div>
                    <span className="text-gray-500 text-sm">BUDGET</span>
                    <h3 className="text-xl font-bold">$500</h3>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                    Make an Offer
                </button>
            </div>

            {/* Hiring Person */}
            <div className="mt-6 p-4 bg-gray-200 rounded-lg flex justify-between items-center">
                <span className="font-semibold">Tracy N.</span>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                    Message
                </button>
            </div>

            {/* About the Job */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold">About the Job</h3>
                <p className="text-gray-700 text-sm mt-2">
                    Seeking a skilled and detail-oriented Kitchen Sink Basin Installer to join our team. The ideal candidate will be
                    responsible for the installation, alignment, and sealing of kitchen sink basins in residential and/or commercial
                    settings. You will ensure each sink is installed according to plumbing codes and client specifications, with a
                    strong focus on quality and customer satisfaction.
                </p>
            </div>

            {/* Responsibilities */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold">Responsibilities</h3>
                <ul className="list-disc text-gray-700 text-sm mt-2 pl-4 space-y-1">
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
            <div className="mt-6">
                <h3 className="text-lg font-semibold">Requirements</h3>
                <ul className="list-disc text-gray-700 text-sm mt-2 pl-4 space-y-1">
                    <li>Proven experience in plumbing or kitchen fixture installation preferred.</li>
                    <li>Knowledge of different sink types and countertop materials (granite, quartz, laminate, etc.).</li>
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
