import {fetchApi} from "src/app/helpers/api/request";

export async function getTasks() {
    const res = await fetchApi({
        path: "/Request"
    });

    return await res.json();
}
