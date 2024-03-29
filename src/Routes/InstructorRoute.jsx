import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const InstructorRoute = ({ children }) => {
  const { user, loading, role } = useAuth();

  const location = useLocation();

  if ( loading ) {
    return <Loader />;
  }
  if (user && role === "Instructor") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
