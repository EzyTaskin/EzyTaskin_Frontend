const API_BASE = process.env.NODE_ENV == "development" ? "https://ishar.tail35ead.ts.net/api/" : "/api";

function joinPaths(...segments: string[]) {
    return segments
        .filter(Boolean) // remove empty/null segments
        .map((s, i) => {
            if (i === 0) return s.replace(/\/+$/, ''); // remove trailing slashes
            return s.replace(/^\/+|\/+$/g, '');        // remove both ends for middle segments
        })
        .join('/');
}

export function getApiUrl(path: string, query: Record<string, string>): string {
    const url = new URL(joinPaths('/api', path), API_BASE);

    console.log(url.toString())

    const searchParams = new URLSearchParams(query);

    searchParams?.forEach((value: string, key: string) => {
        url.searchParams.append(key, value);
    });

    if (!url.searchParams.has("returnUrl")) {
        url.searchParams.append("returnUrl", "/");
    }

    return url.toString();
}
