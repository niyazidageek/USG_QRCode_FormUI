import { httpClient } from "./httpClient";

export const getActiveIssue = () => {
    return httpClient.get("issue/activeissue");
  };