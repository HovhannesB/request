import ReactLoading from "react-loading";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import useLegacyEffect from "../../../../hooks/useLegacyEffect";
import {
  fetchClientsAsync,
  selectClients,
} from "../../../../redux/reducers/clientsReducer";
import ClientsTable from "./ClientsTableWrapper/ClientsTableWrapper";
import { RequestStatus } from "../../../../types/RequestStatus";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
`;

const ClientsTableContainer = styled.div`
  padding: 20px;
`;

const Users = () => {
  const { status, clients } = useAppSelector(selectClients);
  const dispatch = useAppDispatch();

  useLegacyEffect(() => {
    dispatch(fetchClientsAsync());
  }, []);

  if (status === RequestStatus.LOADING) {
    return (
      <LoadingContainer>
        <ReactLoading type="spin" color="green" height="50px" width="50px" />
      </LoadingContainer>
    );
  }

  return (
    <ClientsTableContainer>
      <ClientsTable clients={clients} />
    </ClientsTableContainer>
  );
};

export default Users;
