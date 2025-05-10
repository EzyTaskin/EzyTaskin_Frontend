"use client";

import SearchBar from "src/app/(main)/browse-task/components/SearchBar";
import TaskCard from "src/app/(main)/browse-task/components/TaskCard";
import JobListing from "src/app/(main)/browse-task/components/JobListing";

import React, {useEffect, useState} from "react";
import useQueryTasks from "src/app/hooks/useQueryTasks";
import {TasksResponseType} from "src/app/constants/type";

export default function Browser() {
    const [searchQuery, setSearchQuery] = useState("");
    const [resultsVisible, setResultsVisible] = useState(false);
    const [selectTaskIndex, setSelectedTaskIndex] = useState(0)
    const tasker = useQueryTasks();
    const tasks = tasker.tasks;

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setResultsVisible(false); // Reset the results visibility whenever the search query changes
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            setResultsVisible(true); // Show results when Enter is pressed
        }
    };

    const filteredTasks: TasksResponseType[] =
        searchQuery && resultsVisible
            ? tasks.filter(
                (task) =>
                    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    task.location.toLowerCase().includes(searchQuery.toLowerCase())
            )
            : tasks; // Show all sampleTasks if no search query or resultsVisible is false

    if (tasks == null) return <h1> Loading </h1>
    if (tasks.length == 0) return <h1> No task found </h1>

    const handleSelectTask = (index) => {
        setSelectedTaskIndex(index);
    }

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
                                date={task.dueDate}
                                budget={task.budget}
                                onClick={() => handleSelectTask(idx)}
                            />
                        ))
                    )}
                </div>

                {/* Right Column - Job Listing */}
                <div className="hidden md:block sticky top-32 self-start">
                    <JobListing task={tasks[selectTaskIndex]}/>
                </div>
            </div>
        </section>
    );
}
