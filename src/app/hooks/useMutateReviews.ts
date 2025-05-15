import * as reviewApi from "src/app/helpers/api/reviews";
import {ReviewRequestType} from "src/app/constants/type";

export default function useMutateReviews() {

    async function postReview(data: ReviewRequestType) {
        const res = await reviewApi.postReview(data);
        return res;
    }

    return {
        postReview
    };
}


