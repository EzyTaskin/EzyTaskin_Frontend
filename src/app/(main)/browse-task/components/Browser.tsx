"use client";

import SearchBar from "src/app/(main)/browse-task/components/SearchBar";
import TaskCard from "src/app/(main)/browse-task/components/TaskCard";
import JobListing from "src/app/(main)/browse-task/components/JobListing";

import React, {useState} from "react";
import useQueryTasks from "src/app/hooks/useQueryTasks";
import {TasksResponseType} from "src/app/constants/type";
import {CATEGORIES} from "src/app/constants/list";
import {useQueryCategories} from "src/app/hooks/useQueryCategories";

export default function Browser() {
    const [searchQuery, setSearchQuery] = useState("");
    const [resultsVisible, setResultsVisible] = useState(false);
    const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);

    const [keywords, setKeywords] = useState(null);
    const [categoryId, setCategoryId] = useState<string>(null);
    const [category, setCategory] = useState(null);
    const [location, setLocation] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const {tasks, allTasks} = useQueryTasks({
        keywords,
        categoryId,
        location,
    });
    const {categories} = useQueryCategories();
    const categoryNames = categories.map(category => category.name);
    const locations = [...new Set(allTasks?.map((task) => task.location).filter(Boolean))];

    const handleCategoryChange = (selectedCategory: string) => {
        // setCategory(selectedCategory);
        // const categoryId = categories.find(cat => cat.name === selectedCategory)?.id;
        setCategoryId(selectedCategory);
    }

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
        .sort((a, b) => {
            if (sortBy === "price_low_high") return a.budget - b.budget;
            if (sortBy === "price_high_low") return b.budget - a.budget;
            if (sortBy === "newest") return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
            return 0;
        });

    if (tasks == null) return <h1>Loading...</h1>;

    return (
        <section className="py-28 border-b border-black-100">
            <SearchBar
                searchQuery={searchQuery}
                onSearch={handleSearch}
                onKeyPress={handleKeyPress}
                categories={categories}
                category={categoryId ?? ""}
                onCategoryChange={handleCategoryChange}
                locations={locations}
                location={location ?? ""}
                onLocationChange={setLocation}
                sortBy={sortBy ?? ""}
                onSortByChange={setSortBy}
            />

            {filteredTasks.length != 0 ? <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-6xl mx-auto">
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
            </div> : <h1 className="pt-16 text-xl font-bold text-gray-900 text-center"> No task found </h1>}
        </section>
    );
}
