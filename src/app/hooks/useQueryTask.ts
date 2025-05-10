import {useEffect, useState} from "react";
import {getTask} from "src/app/helpers/api/tasks";
import {TaskRequestType, TaskResponseType} from "src/app/constants/type";

export default function useQueryTask({requestId}: {
    requestId: string;
}) {
    const [task, setTask] = useState<TaskResponseType>()

    useEffect(() => {
        loadTask({
            requestId,
        });
    }, [requestId])

    async function loadTask(request: TaskRequestType) {
        const task: TaskResponseType = await getTask(request);
        setTask(task);
    }

    return {
        task,
        loadTask
    };
}
