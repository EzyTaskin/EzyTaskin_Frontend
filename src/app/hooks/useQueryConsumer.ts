import {useEffect, useState} from "react";
import { getConsumerProfile } from "src/app/helpers/api/profile";
import {ConsumerProfileType} from "src/app/constants/type";

export default function useQueryConsumer(userId?: string) {
  const [consumerProfile, setConsumerProfile] = useState<ConsumerProfileType>()
  useEffect(() => {
      loadConsumerProfile();
  }, [])
      async function loadConsumerProfile() {
        const consumerProfile: ConsumerProfileType = await getConsumerProfile(userId);
        setConsumerProfile(consumerProfile);
      }
  return {
      consumerProfile,
      loadConsumerProfile
    };
}
