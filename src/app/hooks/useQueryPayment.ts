import {useState, useEffect} from "react";
import {PaymentReceiveCardType} from "../constants/type";
import {getPaymentMethod} from "../helpers/api/payment";
import {useQueryCards} from "./useQueryCards";

export default function useQueryPayment(subpage: string) {

    const {cards, loadCards} = useQueryCards();

    useEffect(() => {
        if (subpage === "payment-methods") {
            loadCards();
        }
    }, [subpage, loadCards]);

    return {cards, loadCards};
}
