'use client'

import {getApiUrl} from "src/app/helpers/api/url";

export async function fetchApi({path, method, returnUrl}: {
    path: string,
    method?: string,
    returnUrl?: string
}) {
    const url = getApiUrl(path, {
        returnUrl: returnUrl ? returnUrl : "/"
    })
    const res = await fetch(url, {
            method: method ? method : "GET",
            credentials: "include",
        }
    )
    return res;
}
