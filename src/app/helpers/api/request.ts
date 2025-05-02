'use client'

import {getApiUrl} from "src/app/helpers/api/url";

export async function fetchApi({
                                   path,
                                   method = "GET",
                                   returnUrl = "/",
                                   data,
                               }: {
    path: string;
    method?: string;
    returnUrl?: string;
    data: Record<string, string>;
}) {
    const url = getApiUrl(path, {returnUrl});

    const formData = new FormData();
    for (const key in data) {
        formData.append(key, data[key]);
    }

    const res = await fetch(url, {
        method,
        credentials: "include",
        body: method !== "GET" ? formData : undefined,
    });

    return res;
}

