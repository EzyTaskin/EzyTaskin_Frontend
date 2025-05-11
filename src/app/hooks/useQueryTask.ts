import {useEffect, useState} from "react";
import {getTask} from "src/app/helpers/api/tasks";
import {TaskRequestType, TaskResponseType, TaskState} from "src/app/constants/type";

export default function useQueryTask({requestId}: {
    requestId: string;
}) {
    const [task, setTask] = useState<TaskResponseType>()
    const [taskState, setTaskState] = useState<TaskState>();

    useEffect(() => {
        loadTask({
            requestId,
        });
    }, [requestId])

    async function loadTask(request: TaskRequestType) {
        const task: TaskResponseType = await getTask(request);
        setTask(task);

        if (!task) setTaskState(null)
        else if (task.completedDate) setTaskState('completed');
        else if (task.selected) setTaskState('assigned')
        else if (task.offers) setTaskState('offered');
        else setTaskState('opened')
    }

    return {
        task,
        taskState,
        loadTask
    };
}
