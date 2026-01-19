import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import AuthLayout from "@/components/auth/AuthLayout";

import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import RegisterUser from "@/pages/auth/RegisterUser";
import RegisterStaff from "@/pages/auth/RegisterStaff";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  // for auth
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/register/user",
        element: <RegisterUser />,
      },
      {
        path: "/register/staff",
        element: <RegisterStaff />,
      },
    ],
  },
]);
