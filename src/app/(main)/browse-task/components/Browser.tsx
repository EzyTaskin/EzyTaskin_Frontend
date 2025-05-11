"use client";

import SearchBar from "src/app/(main)/browse-task/components/SearchBar";
import TaskCard from "src/app/(main)/browse-task/components/TaskCard";
import JobListing from "src/app/(main)/browse-task/components/JobListing";

import React, {useState} from "react";
import useQueryTasks from "src/app/hooks/useQueryTasks";
import {TasksResponseType} from "src/app/constants/type";
import {CATEGORIES} from "src/app/constants/list";

export default function Browser() {
    const [searchQuery, setSearchQuery] = useState("");
    const [resultsVisible, setResultsVisible] = useState(false);
    const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);

    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [sortBy, setSortBy] = useState("");

    const tasker = useQueryTasks();
    const tasks = tasker.tasks;

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setResultsVisible(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            setResultsVisible(true);
        }
    };

    const handleSelectTask = (index: number) => {
        setSelectedTaskIndex(index);
    };

    // Extract unique categories and locations from task list
    // const categories = [...new Set(tasks?.map((task) => task.category).filter(Boolean))];
    const locations = [...new Set(tasks?.map((task) => task.location).filter(Boolean))];

    const filteredTasks: TasksResponseType[] = tasks
        ?.filter((task) => {
            if (searchQuery && resultsVisible) {
                const lowerQuery = searchQuery.toLowerCase();
                return (
                    task.title.toLowerCase().includes(lowerQuery) ||
                    task.location.toLowerCase().includes(lowerQuery)
                );
            }
            return true;
        })
        // .filter((task) => (category ? task.category === category : true))
        .filter((task) => (location ? task.location === location : true))
        .sort((a, b) => {
            if (sortBy === "price_low_high") return a.budget - b.budget;
            if (sortBy === "price_high_low") return b.budget - a.budget;
            if (sortBy === "newest") return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
            return 0;
        });

    if (tasks == null) return <h1>Loading...</h1>;
    if (tasks.length === 0) return <h1>No task found</h1>;

    return (
        <section className="py-28 border-b border-black-100">
            <SearchBar
                searchQuery={searchQuery}
                onSearch={handleSearch}
                onKeyPress={handleKeyPress}
                categories={CATEGORIES}
                category={category}
                onCategoryChange={setCategory}
                locations={locations}
                location={location}
                onLocationChange={setLocation}
                sortBy={sortBy}
                onSortByChange={setSortBy}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-6xl mx-auto">
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
                <div className="hidden md:block sticky top-32 self-start">
                    <JobListing task={filteredTasks[selectedTaskIndex] || filteredTasks[0]}/>
                </div>
            </div>
        </section>
    );
}
