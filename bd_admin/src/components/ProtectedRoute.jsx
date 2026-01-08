import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, redirectTo = "/blooddonationadmin/login" }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;

