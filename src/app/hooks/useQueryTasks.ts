import {useEffect, useState} from "react";
import {getTasks} from "src/app/helpers/api/tasks";
import {TasksResponseType} from "src/app/constants/type";

export default function useQueryTasks() {
    const [tasks, setTasks] = useState<TasksResponseType[]>()

    useEffect(() => {
        loadTasks();
    }, [])

    async function loadTasks() {
        const tasks: TasksResponseType[] = await getTasks();
        setTasks(tasks);
    }

    return {
        tasks,
        loadTasks
    };
}
