import React, { useEffect, useState } from "react";
import { getActiveService, postToEndpoint } from "../services/endpointService";
import { getActiveIssue } from "../services/issueService";
import MobileDetect from "mobile-detect";

var md = new MobileDetect(window.navigator.userAgent);

export default function useGetActiveServiceEndpoint() {
  const [deviceType, setDeviceType] = useState(md.mobile());
  const [isLoading, setLoading] = useState(true);
  const [isLoadingPost, setLoadingPost] = useState(false);
  const [endPoint, setEndPoint] = useState(null);
  const [issue, setIssue]: any = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

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
        setLoading(false);
      });
    issue
      .then((res: any) => {
        setIssue(res.data.id);
        setLoading(false);
      })
      .catch((e: any) => {
        setLoading(false);
      });
  }, []);

  function postForm(data: any) {
    if (endPoint && issue) {
      const result = postToEndpoint(endPoint, {
        email: data.email,
        issueId: issue,
        deviceType: deviceType,
      });
      setLoadingPost(true);
      result
        .then((res: any) => {
          setMessage(res.data.message);
          setLoadingPost(false);
        })
        .catch((e: any) => {
          setLoadingPost(false);
        });
    }
  }

  return { isLoading, isLoadingPost, message, error, postForm };
}
