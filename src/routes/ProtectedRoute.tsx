import { Navigate } from "react-router-dom";
import { User } from "../redux/reducers/userReducer";

type Props = {
  user: User | null;
  redirectPath: string;
  children: JSX.Element;
};

// Took this logic from https://www.robinwieruch.de/react-router-private-routes/
const ProtectedRoute = ({
  user,
  redirectPath,
  children,
}: Props): JSX.Element => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

ProtectedRoute.defaultProps = {
  redirectPath: "/login",
};

export default ProtectedRoute;
