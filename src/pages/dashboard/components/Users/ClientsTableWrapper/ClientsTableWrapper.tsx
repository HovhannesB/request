import { useState } from "react";
import { Client } from "../../../../../types/Client";
import ClientsTable from "../ClientsTable/ClientsTable";
import ClientsTableFilters from "../ClientsTableFilters/ClientsTableFilters";

interface Props {
  clients: Client[];
}

const ClientsTableWrapper = ({ clients }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isBanned, setIsBanned] = useState(false);

  const handleChangeSearchQuery = (value: string) => {
    setSearchQuery(value);
  };

  const handleChangeIsBanned = (checked: boolean) => {
    setIsBanned(checked);
  };

  return (
    <div>
      <ClientsTableFilters
        searchQuery={searchQuery}
        isBanned={isBanned}
        onChangeSearchQuery={handleChangeSearchQuery}
        onChangeIsBanned={handleChangeIsBanned}
      />
      <ClientsTable
        clients={clients.filter(
          (client) =>
            client.name
              .toLocaleLowerCase()
              .includes(searchQuery.toLocaleLowerCase()) &&
            client.isBanned === isBanned
        )}
      />
    </div>
  );
};

export default ClientsTableWrapper;
