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
    data?: Record<string, any>;
}) {
    const url = getApiUrl(path, {returnUrl});

    const formData = new FormData();
    if (data) {
        for (const key in data) {
        const value = data[key];
        if (Array.isArray(value)) {
            value.forEach((item) => {
            formData.append(key, item);
            });
        } else {
            formData.append(key, value);
        }
        }
    }

    const res = await fetch(url, {
        method,
        credentials: "include",
        body: method !== "GET" ? formData : undefined,
    });

    return res;
}

