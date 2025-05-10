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
    data?: Record<string, any> | string;
}) {
    const url = getApiUrl(path, {returnUrl});

    console.log("🔍 Request URL:", url);
    console.log("📦 Request Method:", method);
    console.log("🧾 Form Data or Text:", data);

    let body: BodyInit | undefined;
    const headers: HeadersInit = {};

    if (method !== "GET") {
        if (typeof data === "string") {
            body = JSON.stringify(data);
            headers["Content-Type"] = "application/json";
        } else if (typeof data === "object" && data !== null) {
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key]);
            }
            body = formData;
        }
    }

    const res = await fetch(url, {
        method,
        credentials: "include",
        body,
        headers,
    });

    return res;
}


