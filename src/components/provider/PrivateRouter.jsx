import React, { use } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router";

const PrivateRouter = ({ children }) => {
  //   const location = useLocation();
  const { user } = use(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate to="/auth/login"></Navigate>;
};

export default PrivateRouter;
