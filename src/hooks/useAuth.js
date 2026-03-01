import { useSelector, useDispatch } from "react-redux";

import { login, logout } from "../features/authSlice.js";

function useAuth() {
  // Get authentication details.
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const userData = useSelector((state) => state.auth.userData);

  // Dispatch authentication functions.
  // Initialization.
  const dispatch = useDispatch();

  // Login dispatch.
  const dispatchLogin = (userData) => {
    dispatch(login(userData));
  };

  // Logout dispatch.
  const dispatchLogout = () => {
    dispatch(logout());
  };

  return {
    isAuthenticated,
    userData,
    dispatchLogin,
    dispatchLogout,
  };
}

export default useAuth;
