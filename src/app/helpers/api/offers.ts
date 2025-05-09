import {fetchApi} from "src/app/helpers/api/request";
import {OfferType} from "src/app/constants/type";

export async function postOffer(data: OfferType) {
    await fetchApi({
        path: "/Request/Offer",
        method: "POST",
        data: data
    });
}
