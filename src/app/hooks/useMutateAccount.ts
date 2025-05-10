// hooks/useUpdateProviderProfile.ts
import { useState } from "react";
import { UpdateAccountType } from "../constants/type";
import  * as updateAccount from "../helpers/api/account";


export function useMutateAccount() {
   async function updateAccountInfo(data: UpdateAccountType) {
        const res = await updateAccount.updateAccountInfo(data);
    }

    return {
        updateAccountInfo
    };
}
