import { login, logout } from "@/features/authSlice";
import { useAppSelector, useAppDispatch } from "@/hooks/useStore";
import type { UserData } from "@/types/types";

export function useAuth() {
  // Get authentication details.
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const userData = useAppSelector((state) => state.auth.userData);

  // Dispatch authentication functions.
  // Initialization.
  const dispatch = useAppDispatch();

  // Login dispatch.
  const dispatchLogin = (userData: UserData) => {
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
