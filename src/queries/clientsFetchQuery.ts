import { authorizedQuery } from "./authorizedQuery";

export function clientsFetchQuery() {
  return authorizedQuery("users");
}
