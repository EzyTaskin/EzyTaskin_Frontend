'use client'

import TaskDetailCard from "src/app/(main)/my-tasks/details/components/TaskDetailCard";
import {useSearchParams} from 'next/navigation';
import useQueryTask from "src/app/hooks/useQueryTask";

export default function Task() {
    const searchParams = useSearchParams();
    const taskId = searchParams.get('taskId');
    const {task} = useQueryTask({
        requestId: taskId
    });
    return (
        <section className="py-28 border-b border-black-100">
            <div className="p-6 mx-auto">
                <TaskDetailCard task={task}/>
            </div>
        </section>
    )
}
