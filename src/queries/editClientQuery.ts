import { Client } from "../types/Client";
import { authorizedQuery, RequestMethod } from "./authorizedQuery";

export function editClientQuery(client: Omit<Client, "registeredAt">) {
  return authorizedQuery(
    `users/${client.id}`,
    RequestMethod.PUT,
    new URLSearchParams({ ...client, isBanned: String(client.isBanned) })
  );
}
