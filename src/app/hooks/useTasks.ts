import {useEffect, useState} from "react";
import {getTasks} from "src/app/helpers/api/tasks";

export default function useTasks() {
    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        async function fetchTasks() {
            const res = await getTasks();
            if (res.status == 200) {
                const data = res.json();
                setTasks(data);
            }
        }

        fetchTasks()
    })

    return tasks;
}
