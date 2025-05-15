import {fetchApi} from "src/app/helpers/api/request";
import {ReviewRequestType, TasksRequestType} from "src/app/constants/type";

// export async function getTasks(keywords?: string, categoryId?: string, location?: string) {
//     const res = await fetchApi({
//         path: "/Request/FindRequests",
//         data: {
//             keywords,
//             ...(categoryId != null && {categoryId: [categoryId]}),
//             location
//         }
//     });
//
//     if (res.status == 200) return await res.json();
//     return null;
// }

export async function postReview(data: ReviewRequestType) {
    await fetchApi({
        path: "/Review",
        method: "POST",
        data: data
    });
}
