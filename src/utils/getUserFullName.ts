import { User } from "../redux/reducers/userReducer";

export const getUserFullName = (user: User) =>
  `${user.firstName} ${user.lastName}`;
