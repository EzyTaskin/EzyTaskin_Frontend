const API_BASE = process.env.NODE_ENV === "development" ?
    "https://ishar.tail35ead.ts.net/api/" : "/api/"

export function getApiUrl(path: string, query): string {
    const base = new URL(API_BASE, window.location.href);
    const url = new URL(path, base);

    if (query && !(query instanceof URLSearchParams)) {
        query = new URLSearchParams(query);
    }

    query?.forEach((value: string, key: string) => {
        url.searchParams.append(key, value);
    });

    if (!url.searchParams.has("returnUrl")) {
        url.searchParams.append("returnUrl", "/");
    }

    return url.toString();
}
