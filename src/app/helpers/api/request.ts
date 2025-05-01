import {getApiUrl} from "src/app/helpers/api/url";

export async function fetchApi({path, method, returnUrl}: {
    path: string,
    method: string,
    returnUrl?: string
}) {
    const res = await fetch(getApiUrl(path, {
        returnUrl
    }), {
        method: method,
        credentials: "include"
    })
    return res;
}
