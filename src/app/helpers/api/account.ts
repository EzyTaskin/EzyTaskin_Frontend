import { UpdateAccountType } from "src/app/constants/type";
import { fetchApi } from "./request";

export async function updateAccountInfo({ fullName, phoneNumber, address }: UpdateAccountType) {
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
      // Optionally redirect to the returnUrl
      window.location.reload();
    } else {
      // Handle error
      console.error("Error saving profile:", response.statusText);
    }
}