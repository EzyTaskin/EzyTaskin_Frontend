'use client'

import OpenTasks from "src/app/(main)/my-tasks/components/OpenTasks";
import useQueryMyTasks from "src/app/hooks/useQueryMyTasks";
import React from "react";
import CompletedTasks from "src/app/(main)/my-tasks/components/CompletedTasks";

export default function MyTasks() {
    const {myTasks} = useQueryMyTasks();

    if (!myTasks) return <h1> Loading My tasks </h1>

    const openTasks = myTasks.filter((task) => !task.completedDate);
    const completeTasks = myTasks.filter((task) => task.completedDate);

    return (
        <section className="py-28 border-b border-black-100">
            <div className="grid gap-6 p-6 max-w-6xl mx-auto">
                <OpenTasks openTasks={openTasks}/>
                <CompletedTasks completedTasks={completeTasks}/>
            </div>
        </section>
    );
}
