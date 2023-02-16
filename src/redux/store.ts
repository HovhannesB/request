import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import clientsReducer from "./reducers/clientsReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    clients: clientsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
