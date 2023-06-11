import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layouts/Dashboard";
import ManageUsers from "../Components/Dashboard/ManageUsers";
import AddClass from "../Components/Dashboard/AddClass";
import ManageAllClasses from "../Components/Dashboard/ManageAllClasses";
import PrivateRoute from "./PrivateRoute";
import AllClasses from "../Pages/AllClasses/AllClasses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import InstructorClasses from "../Components/Dashboard/Instructor/InstructorClasses";
import SelectedClasses from "../Components/Student/SelectedClasses";
import AllInstructor from "../Pages/AllInstructor/AllInstructor";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/classes",
        element: <AllClasses />,
      },
      {
        path: "/allInstructor",
        element: <AllInstructor />,
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
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      // Admin Dashboard
      {
        path: "/dashboard/manageUsers",
        element: <ManageUsers />,
      },
      {
        path: "/dashboard/manageClasses",
        element: <ManageAllClasses />,
      },
      // Instructor Dashboard
      {
        path: "/dashboard/addClass",
        element: <AddClass />,
      },
      {
        path: "/dashboard/insClasses",
        element: <InstructorClasses />,
      },
      // student dashboard
      {
        path: "/dashboard/selectedClasses",
        element: <SelectedClasses />,
      },
    ]
  },
  
]);
