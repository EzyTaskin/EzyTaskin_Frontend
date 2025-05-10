// hooks/useMutateCard.ts
import { PaymentSendCardType } from "../constants/type";
import { postCard } from "../helpers/api/card";

export default function useMutateCard() {
  const handleAddPayment = async (formData: PaymentSendCardType) => {
    const isFormValid =
      formData.number.trim() !== "" &&
      formData.expiry.trim() !== "" &&
      formData.cvv.trim() !== "" &&
      formData.name.trim() !== "";

    if (!isFormValid) {
      alert("Please fill in all fields.");
      return false;
    }

    try {
      const response = await postCard(formData);

      if (response.ok) {
        alert("Payment method added!");
        return true;
      } else {
        console.error("Failed to add payment method:", response.statusText);
        alert("Failed to add payment method.");
        return false;
      }
    } catch (error) {
      console.error("Error while adding payment method:", error);
      alert("Something went wrong.");
      return false;
    }
  };

  // ✅ Correct location for return
  return { handleAddPayment };
}
