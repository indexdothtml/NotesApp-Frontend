import useAuth from "../hooks/useAuth.js";
import { Navigate } from "react-router";

function ProtectedRoute(Props) {
  const { children } = Props;

  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
