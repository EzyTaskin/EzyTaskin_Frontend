import {useEffect, useState} from "react";
import {getProviderProfile,getConsumerProfile, getCommonDetail} from "src/app/helpers/api/profile";
import {ProviderProfileType, ConsumerProfileType, CommonDetailType} from "src/app/constants/type";
import useQueryProvider from "./useQueryProvider";
import useQueryConsumer from "./useQueryConsumer";
import useQueryCommonDetail from "./useQueryCommonDetail";

export default function useQueryProfile(userId?: string) {
  const { providerProfile } = useQueryProvider(userId);
  const { consumerProfile } = useQueryConsumer(userId);
  const { commonDetail } = useQueryCommonDetail();

  return {
    providerProfile,
    consumerProfile,
    commonDetail
  }
}
