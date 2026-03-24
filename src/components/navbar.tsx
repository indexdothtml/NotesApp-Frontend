import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { userLogoutService } from "@/services/authServices";
import { useAuth } from "@/hooks/useAuth";

export function NavBar() {
  const navigate = useNavigate();

  const { isAuthenticated, dispatchLogout } = useAuth();

  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);

    const response = await userLogoutService();

    if (response.success) {
      toast.success("Logout Successful!", { position: "top-center" });
      dispatchLogout();
      setIsLoggingOut(false);
      navigate("/login");
    } else {
      toast.error("Logout Failed!", { position: "top-center" });
      setIsLoggingOut(false);
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <div>
        <Link to="/">Notiva</Link>
      </div>
      <div>
        {isAuthenticated ? (
          <Button
            aria-label="Logout"
            disabled={isLoggingOut}
            onClick={handleLogout}
            className="cursor-pointer hover:opacity-80"
          >
            {isLoggingOut && <Spinner />}
            {isLoggingOut ? "Logging out..." : "Logout"}
          </Button>
        ) : (
          <Button asChild>
            <Link to="/login">Login</Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
