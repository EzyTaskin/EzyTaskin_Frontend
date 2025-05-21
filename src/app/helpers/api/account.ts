import {UpdateAccountType} from "src/app/constants/type";
import {fetchApi} from "./request";

export async function updateAccountInfo({fullName, phoneNumber, address}: UpdateAccountType) {
    const response = await fetchApi({
        path: "/Account",
        method: "PATCH",
        data: {
            fullName: fullName,
            phoneNumber: phoneNumber,
            address: address,
        },
    });

    if (response.ok) {
        console.log("Profile saved successfully!");
        window.location.reload();
    } else {
        console.error("Error saving profile:", response.statusText);
    }
}

export async function resendEmailConfirmation(email: string) {
    const response = await fetchApi({
        path: "/Account/ResendEmailConfirmation",
        method: "POST",
        data: {
            email: email,
        }
    })

    return response;
}

export async function confirmEmail(email: string, code: string) {
    const response = await fetchApi({
        path: "/Account/ConfirmEmail",
        method: "POST",
        data: {
            email: email,
            code: code,
        }
    })

    return response;
}
