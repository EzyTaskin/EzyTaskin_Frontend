import {fetchApi} from "src/app/helpers/api/request";
import {TaskRequestType} from "src/app/constants/type";

export async function getTasks() {
    const res = await fetchApi({
        path: "/Request/FindRequests",
    });

    if (res.status == 200) return await res.json();
    return null;
}


export async function postTask(data: TaskRequestType) {
    await fetchApi({
        path: "/Request",
        method: "POST",
        data: data
    });
}
