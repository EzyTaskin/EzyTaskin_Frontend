import * as offerApi from "src/app/helpers/api/offers";
import {OfferType} from "src/app/constants/type";

export default function useMutateOffers() {

    async function postOffer(data: OfferType) {
        const res = await offerApi.postOffer(data);
    }

    return {
        postOffer
    };
}


