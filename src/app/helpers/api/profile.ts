import { fetchApi } from "src/app/helpers/api/request";
import {ProviderProfileType, UpdateProfilePayloadType} from "src/app/constants/type";
import { data } from "react-router-dom";

export async function getProviderProfile() {
  const res = await fetchApi({ path: "/Profile/Provider", method: "GET" });
  return res.json();
}

export async function getConsumerProfile() {
  const res = await fetchApi({ path: "/Profile/Consumer", method: "GET" });
  return res.json();
}

export async function getCommonDetail() {
  const res = await fetchApi({ path: "/Account", method: "GET" });
  return res.json();
}


export async function updateProviderProfile({ description, categories }: UpdateProfilePayloadType) {
  try {
    const data = {
      description,
      category: categories,
    };

    console.log("🔍 Data to be sent:", data);

    const response = await fetchApi({
      path: "/Profile/Provider",
      method: "PATCH",
      data,  // this is what gets sent
    });

    if (response.ok) {
      console.log("✅ Categories sent:", categories);
      console.log("✅ Profile saved successfully!");
      window.location.reload();
    } else {
      console.error("❌ Error saving profile:", response.statusText);
    }
  } catch (error) {
    console.error("❌ Network or server error:", error);
  }
}
