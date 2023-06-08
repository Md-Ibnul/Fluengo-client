import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layouts/Dashboard";
import ManageUsers from "../Components/Dashboard/ManageUsers";
import AddClass from "../Components/Dashboard/AddClass";
import ManageAllClasses from "../Components/Dashboard/ManageAllClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/manageUsers",
        element: <ManageUsers />,
      },
      {
        path: "/dashboard/manageClasses",
        element: <ManageAllClasses />,
      },
      {
        path: "/dashboard/addClass",
        element: <AddClass />,
      },
    ]
  },
  
]);
