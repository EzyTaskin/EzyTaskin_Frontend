import {useEffect, useState} from "react";
import {getCommonDetail} from "src/app/helpers/api/profile";
import {CommonDetailType } from "src/app/constants/type";

export default function useQueryCommonDetail() {

    const [commonDetail, setCommonDetail] = useState<CommonDetailType>()

    useEffect(() => {
      loadCommonDetail();
    }, [])
    
    async function loadCommonDetail() {
      const commonDetail: CommonDetailType = await getCommonDetail();
      setCommonDetail(commonDetail);
    }
  
    return {
      commonDetail,
      loadCommonDetail
    };
 }