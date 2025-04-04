import SearchBar from "src/app/(main)/provider/browse/components/SearchBar";
import TaskCard from "src/app/(main)/provider/browse/components/TaskCard";
import JobListing from "src/app/(main)/provider/browse/components/JobListing";

export default function Browser() {
    return (
        <section className="py-28 border-b border-black-100">
            <SearchBar/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-6xl mx-auto">
                {/* Left Column - Task Cards */}
                <div className="space-y-4">
                    <TaskCard/>
                    <TaskCard/>
                    <TaskCard/>
                </div>

                {/* Right Column - Job Listing */}
                <div>
                    <JobListing/>
                </div>
            </div>
        </section>
    )
}
