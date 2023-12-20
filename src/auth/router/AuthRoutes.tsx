import { Navigate } from "react-router-dom";
import { LoginPage } from "../pages";

export const AuthRoutes = [
  {
    path: "login",
    element: <LoginPage />
  },
  {
    path: "/auth/*",
    element: <Navigate to={"/auth/login"} />,
  },
];