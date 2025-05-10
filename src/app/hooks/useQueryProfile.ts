import {useEffect, useState} from "react";
import {getProviderProfile,getConsumerProfile, getCommonDetail} from "src/app/helpers/api/profile";
import {ProviderProfileType, ConsumerProfileType, CommonDetailType} from "src/app/constants/type";
import useQueryProvider from "./useQueryProvider";
import useQueryConsumer from "./useQueryConsumer";
import useQueryCommonDetail from "./useQueryCommonDetail";

export default function useQueryProfile() {
  const { providerProfile } = useQueryProvider();
  const { consumerProfile } = useQueryConsumer();
  const { commonDetail } = useQueryCommonDetail();

  return {
    providerProfile,
    consumerProfile,
    commonDetail
  }
}
