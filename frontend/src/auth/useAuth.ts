import api from "@/lib/axios";
import { useAuthContext } from "./AuthContext";
import type { LoginResponse } from "@/types/auth";
import { useNavigate } from "react-router-dom";

// custom hook for the components to use
export const useAuth = () => {
  const navigate = useNavigate();
  const { user, setAuthUser } = useAuthContext();

  // register user
  const registerUser = async (data) => {
    await api.post("/auth/register/user", data);

    navigate("/login");
  };

  // register staff
  const registerStaff = async (data) => {
    await api.post("/auth/register/staff", data);

    navigate("/login");
  };

  // login
  const login = async (email: string, password: string) => {
    const response = await api.post<LoginResponse>("/auth/api", {
      email,
      password,
    });

    const { token, user } = response.data;

    // persist the jwt token
    localStorage.setItem("token", token);

    // update the auth context with user
    setAuthUser(user);

    // role base redirect
    switch (user.role) {
      case "user":
        navigate("/user/dashboard");
        break;
      case "staff":
        navigate("/staff/dashboard");
        break;
      case "admin":
        navigate("/admin/dashboard");
        break;

      // fallback for unknown roles
      default:
        navigate("/login");
    }
  };

  // logout
  const logout = () => {
    // remove jwt token
    localStorage.removeItem("token");

    // clear auth context
    setAuthUser(null);

    // redirect
    navigate(
      "/",
      { replace: true }, // replace history to prevent back btn to access protected pages
    );
  };

  return {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    registerUser,
    registerStaff,
  };
};
