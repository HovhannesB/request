import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clientsFetchQuery } from "../../queries/clientsFetchQuery";
import { editClientQuery } from "../../queries/editClientQuery";
import { removeClientQuery } from "../../queries/removeClientQuery";
import { Client } from "../../types/Client";
import { RequestStatus } from "../../types/RequestStatus";
import { RootState } from "../store";

export interface ClientsState {
  clients: Client[];
  status: RequestStatus;
  removeStatus: RequestStatus;
  editStatus: RequestStatus;
}

const initialState: ClientsState = {
  clients: [],
  status: RequestStatus.IDLE,
  removeStatus: RequestStatus.IDLE,
  editStatus: RequestStatus.IDLE,
};

export const fetchClientsAsync = createAsyncThunk(
  "clients/fetchClients",
  async () => {
    const response = await clientsFetchQuery();

    // Some hack for test boolean
    return response.map((client: any) => ({
      ...client,
      isBanned:
        typeof client.isBanned === "boolean"
          ? client.isBanned
          : client.isBanned === "true",
    })) as Client[];
  }
);

export const editClientsAsync = createAsyncThunk(
  "clients/editClients",
  async (client: Omit<Client, "registeredAt">) => {
    const response = await editClientQuery(client);

    // Here is hacky, there should be some parse util function for parsing backend sent object to front end
    return {
      ...response,
      isBanned:
        typeof response.isBanned === "boolean"
          ? response.isBanned
          : response.isBanned === "true",
      registeredAt: new Date(response.registeredAt as string).toDateString(),
    } as Client;
  }
);

export const removeClientAsync = createAsyncThunk(
  "clients/removeClientAsync",
  async (clientId: string) => {
    await removeClientQuery(clientId);

    return clientId;
  }
);

export const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClientsAsync.pending, (state) => {
        state.status = RequestStatus.LOADING;
      })
      .addCase(fetchClientsAsync.fulfilled, (state, action) => {
        state.status = RequestStatus.IDLE;
        state.clients = action.payload.map((client) => ({
          ...client,
          registeredAt: new Date(client.registeredAt as string).toDateString(),
        }));
      })
      .addCase(fetchClientsAsync.rejected, (state) => {
        state.status = RequestStatus.FAILED;
      })
      .addCase(removeClientAsync.pending, (state) => {
        state.removeStatus = RequestStatus.LOADING;
      })
      .addCase(removeClientAsync.fulfilled, (state, action) => {
        state.removeStatus = RequestStatus.IDLE;
        state.clients = state.clients.filter(
          (client) => client.id !== action.payload
        );
      })
      .addCase(removeClientAsync.rejected, (state) => {
        state.removeStatus = RequestStatus.FAILED;
      })
      .addCase(editClientsAsync.pending, (state) => {
        state.editStatus = RequestStatus.LOADING;
      })
      .addCase(editClientsAsync.fulfilled, (state, action) => {
        state.editStatus = RequestStatus.IDLE;
        state.clients = state.clients.map((client) =>
          client.id === action.payload.id ? action.payload : client
        );
      })
      .addCase(editClientsAsync.rejected, (state) => {
        state.editStatus = RequestStatus.FAILED;
      });
  },
});

export const selectClients = (state: RootState) => state.clients;

export default clientsSlice.reducer;
