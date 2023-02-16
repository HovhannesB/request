import config from "../config";
import Storage from "../helpers/Storage/Storage";

export enum RequestMethod {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PUT = "PUT",
}

export function authorizedQuery(
  url: string,
  method: RequestMethod = RequestMethod.GET,
  body?: URLSearchParams
) {
  return fetch(`${config.apiEndpoint}/${url}`, {
    method: method,
    headers: {
      Authorization: `Bearer ${Storage.getUser()?.token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    ...(body ? { body } : null),
  }).then((response) => response.json());
}
