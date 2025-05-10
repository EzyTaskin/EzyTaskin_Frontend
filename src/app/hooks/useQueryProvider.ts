import {useEffect, useState} from "react";
import { getProviderProfile } from "src/app/helpers/api/profile";
import { ProviderProfileType } from "src/app/constants/type";

export default function useQueryProvider() {
  const [providerProfile, setProviderProfile] = useState<ProviderProfileType>()
  useEffect(() => {
      loadProviderProfile();
  }, [])
      async function loadProviderProfile() {
        const providerProfile: ProviderProfileType = await getProviderProfile();
        setProviderProfile(providerProfile);
      }
  return {
      providerProfile,
      loadProviderProfile
    };
}