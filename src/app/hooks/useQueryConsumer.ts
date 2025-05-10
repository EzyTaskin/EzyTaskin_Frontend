import {useEffect, useState} from "react";
import { getConsumerProfile } from "src/app/helpers/api/profile";
import {ConsumerProfileType} from "src/app/constants/type";

export default function useQueryConsumer() {
  const [consumerProfile, setConsumerProfile] = useState<ConsumerProfileType>()
  useEffect(() => {
      loadConsumerProfile();
  }, [])
      async function loadConsumerProfile() {
        const consumerProfile: ConsumerProfileType = await getConsumerProfile();
        setConsumerProfile(consumerProfile);
      }
  return {
      consumerProfile,
      loadConsumerProfile
    };
}