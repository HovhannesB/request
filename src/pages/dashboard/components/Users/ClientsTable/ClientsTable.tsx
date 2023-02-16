import styled from "styled-components";
import { Client } from "../../../../../types/Client";
import ActionButtons from "./ActionButtons";

interface Props {
  clients: Client[];
}

const Table = styled.table`
  width: 100%;
`;

const TableHeader = styled.th`
  text-align: left;
`;

const IdColumn = styled.th`
  text-align: left;
  width: 70px;
`;

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;

const ClientsTable = ({ clients }: Props) => {
  return (
    <Table>
      <thead>
        <tr>
          <IdColumn>User Id</IdColumn>
          <TableHeader>Avatar</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Is Banned</TableHeader>
          <TableHeader>Registered At</TableHeader>
          <TableHeader />
        </tr>
      </thead>
      {clients.map((client) => (
        <tbody key={client.name}>
          <tr>
            <td>{client.id}</td>
            <td>
              {client.avatar && (
                <StyledImg src={client.avatar} alt={client.name} />
              )}
            </td>
            <td>{client.name}</td>
            <td>{client.isBanned ? "Yes" : "No"}</td>
            <td>{client.registeredAt}</td>
            <td>
              <ActionButtons clientId={client.id} />
            </td>
          </tr>
        </tbody>
      ))}
    </Table>
  );
};

export default ClientsTable;
