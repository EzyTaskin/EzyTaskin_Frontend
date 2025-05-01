import {fetchApi} from "src/app/helpers/api/request";

export async function getTasks() {
    const res = await fetchApi({
        path: "/Request/FindRequests"
    });

    return await res.json();
}
