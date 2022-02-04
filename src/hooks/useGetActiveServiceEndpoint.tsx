import React, { useEffect, useState } from "react";
import { getActiveService, postToEndpoint } from "../services/endpointService";
import { getActiveIssue } from "../services/issueService";
import MobileDetect from "mobile-detect";
import { useAlert } from "react-alert";

var md = new MobileDetect(window.navigator.userAgent);

export default function useGetActiveServiceEndpoint() {
  const [deviceType, setDeviceType] = useState(md.mobile());
  const [isLoading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [isLoadingPost, setLoadingPost] = useState(false);
  const [endPoint, setEndPoint] = useState(null);
  const [issue, setIssue]: any = useState(null);
  const alert = useAlert();

  useEffect(() => {
    !deviceType && setDeviceType("Generic Device");

    const service = getActiveService();
    const issue = getActiveIssue();
    service
      .then((res: any) => {
        setEndPoint(res.data.url);
        setLoading(false);
      })
      .catch((e: any) => {
        alert.show(e.response.data.message, {type:'error'})
        setLoading(false);
      });
    issue
      .then((res: any) => {
        setIssue(res.data.id);
        setLoading(false);
      })
      .catch((e: any) => {
        alert.show(e.response.data.message, {type:'error'})
        setLoading(false);
      });
  }, []);

  const postForm = (data: any) => {
    if (endPoint && issue) {
      const result = postToEndpoint(endPoint, {
        email: data.email,
        issueId: issue,
        deviceType: deviceType,
      });
      setLoadingPost(true);
      result
        .then((res: any) => {
          setLoadingPost(false);
          setOpen(true)
        })
        .catch((e: any) => {
          setLoadingPost(false);
          alert.show(e.response.data.message, {type:'error'})
        });
    }
  }

  return { isLoading, isLoadingPost, postForm, open, setOpen };
}
