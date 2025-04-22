// "use client";

import SearchBar from "src/app/(main)/provider/browse/components/SearchBar";
import TaskCard from "src/app/(main)/provider/browse/components/TaskCard";
import JobListing from "src/app/(main)/provider/browse/components/JobListing";

// export default function Browser() {
//   const tasks = [
//     {
//       title: "Install kitchen sink basin",
//       location: "Wollongong",
//       date: "Tues 8th, 2025",
//       budget: 500,
//     },
//     {
//       title: "Bathroom tap replacement",
//       location: "Surry Hills",
//       date: "Wed 10th, 2025",
//       budget: 120,
//     },
//     {
//       title: "Dishwasher installation",
//       location: "Parramatta",
//       date: "Fri 12th, 2025",
//       budget: 200,
//     },
//   ];

const jobDetails = {
  title: "Install kitchen sink basin",
  status: "OPEN",
  location: "Wollongong",
  date: "Tues 8th, 2025",
  time: "Morning",
  postedBy: "Tracy N.",
  budget: 500,
  about:
    "Seeking a skilled and detail-oriented Kitchen Sink Basin Installer to join our team. The ideal candidate will be responsible for the installation, alignment, and sealing of kitchen sink basins in residential and/or commercial settings.",
  responsibilities:
    "Remove old sinks and prepare surfaces for new installations. Install a variety of sink types (undermount, top-mount, farmhouse, etc.). Secure and seal sink basins to countertops using appropriate materials. Connect plumbing fixtures including drainpipes, garbage disposals, and faucets. Perform leak tests and ensure watertight sealing.",
  requirements:
    "Proven experience in plumbing or kitchen fixture installation preferred.  Knowledge of different sink types and countertop materials. Ability to lift and maneuver heavy sink basins. Strong problem-solving skills and customer service.",
};

//   return (
//     <section className="py-28 border-b border-black-100">
//       <SearchBar />
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-6xl mx-auto">
//         {/* Left Column - Task Cards */}
//         <div className="space-y-4">
//           {tasks.map((task, idx) => (
//             <TaskCard
//               key={idx}
//               title={task.title}
//               location={task.location}
//               date={task.date}
//               budget={task.budget}
//               onClick={() => console.log(`Clicked ${task.title}`)}
//             />
//           ))}
//         </div>

//         {/* Right Column - Job Listing */}
//         <div>
//           <JobListing {...jobDetails} />
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";

export default function Browser() {
  const [searchQuery, setSearchQuery] = useState("");
  const [resultsVisible, setResultsVisible] = useState(false);

  const tasks = [
    {
      title: "Install kitchen sink basin",
      location: "Wollongong",
      date: "Tues 8th, 2025",
      budget: 500,
    },
    {
      title: "Bathroom tap replacement",
      location: "Surry Hills",
      date: "Wed 10th, 2025",
      budget: 120,
    },
    {
      title: "Dishwasher installation",
      location: "Parramatta",
      date: "Fri 12th, 2025",
      budget: 200,
    },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setResultsVisible(false); // Reset the results visibility whenever the search query changes
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setResultsVisible(true); // Show results when Enter is pressed
    }
  };

  const filteredTasks =
    searchQuery && resultsVisible
      ? tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.location.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : tasks; // Show all tasks if no search query or resultsVisible is false

  return (
    <section className="py-28 border-b border-black-100">
      <SearchBar
        searchQuery={searchQuery}
        onSearch={handleSearch}
        onKeyPress={handleKeyPress}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-6xl mx-auto">
        {/* Left Column - Task Cards */}
        <div className="space-y-4">
          {filteredTasks.length === 0 ? (
            <p>No tasks found</p>
          ) : (
            filteredTasks.map((task, idx) => (
              <TaskCard
                key={idx}
                title={task.title}
                location={task.location}
                date={task.date}
                budget={task.budget}
                onClick={() => console.log(`Clicked ${task.title}`)}
              />
            ))
          )}
        </div>

        {/* Right Column - Job Listing */}
        <div>
          <JobListing {...jobDetails} />
        </div>
      </div>
    </section>
  );
}
