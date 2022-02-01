import { httpClient } from "./httpClient";

export const getActiveService = () => {
  return httpClient.get("serviceendpoint/activeserviceendpoint");
};

export const postToEndpoint = (url: any, data: any) => {
  return httpClient.post(url, data);
};
