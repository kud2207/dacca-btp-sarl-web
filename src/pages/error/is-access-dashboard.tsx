import * as React from "react";
import { useModalShowLogin } from "../../store/auth-store-admin";
import { Navigate } from "react-router-dom";
import Dashboard from "../../dashboard/home/dashboard";

interface IIsAccessDashboardProps {}

const useAuth = () => {
  const { token } = useModalShowLogin();
  return !!token;
};
const IsAccessDashboard: React.FunctionComponent<
  IIsAccessDashboardProps
> = () => {
  const isverified = useAuth();
  
  if (!isverified) {
    return <Navigate to="/" replace />;
  }
  return <Dashboard />;
};

export default IsAccessDashboard;
