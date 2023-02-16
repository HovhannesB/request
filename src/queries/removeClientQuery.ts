import { authorizedQuery, RequestMethod } from "./authorizedQuery";

export function removeClientQuery(clientId: string) {
  return authorizedQuery(`users/${clientId}`, RequestMethod.DELETE);
}
