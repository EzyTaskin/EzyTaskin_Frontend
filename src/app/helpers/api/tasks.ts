import {fetchApi} from "src/app/helpers/api/request";
import {TasksRequestType} from "src/app/constants/type";

export async function getTasks() {
    const res = await fetchApi({
        path: "/Request/FindRequests",
    });

    if (res.status == 200) return await res.json();
    return null;
}

export async function getTask({requestId}: { requestId: string }) {
    const res = await fetchApi({
        path: "/Request/?requestId=" + requestId,
    });

    if (res.status == 200) return await res.json();
    return null;
}

export async function getMyTasks() {
    const res = await fetchApi({
        path: "/Request",
    });

    if (res.status == 200) return await res.json();
    return null;
}


export async function postTask(data: TasksRequestType) {
    await fetchApi({
        path: "/Request",
        method: "POST",
        data: data
    });
}
