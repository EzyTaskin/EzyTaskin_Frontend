import {useEffect, useState} from "react";
import {getTasks} from "src/app/helpers/api/tasks";
import {TaskResponseType} from "src/app/constants/type";

export default function useQueryTasks() {
    const [tasks, setTasks] = useState<TaskResponseType[]>()

    useEffect(() => {
        loadTasks();
    }, [])

    async function loadTasks() {
        const tasks: TaskResponseType[] = await getTasks();
        setTasks(tasks);
    }

    return {
        tasks,
        loadTasks
    };
}
