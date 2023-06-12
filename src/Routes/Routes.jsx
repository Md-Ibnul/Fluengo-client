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
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Feedback from "../Components/Dashboard/Instructor/Feedback";
import UpdateClass from "../Components/Dashboard/Instructor/UpdateClass";
import PayOnline from "../Components/Student/PayOnline";
import EnrollClasses from "../Components/Student/EnrollClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
        element: <AdminRoute><ManageUsers /></AdminRoute>,
      },
      {
        path: "/dashboard/manageClasses",
        element: <AdminRoute><ManageAllClasses /></AdminRoute>,
      },
      // Instructor Dashboard
      {
        path: "/dashboard/addClass",
        element: <InstructorRoute><AddClass /></InstructorRoute>,
      },
      {
        path: "/dashboard/insClasses",
        element: <InstructorRoute><InstructorClasses /></InstructorRoute>,
      },
      {
        path: "/dashboard/feedback",
        element: <InstructorRoute><Feedback/></InstructorRoute>,
      },
      {
        path: "/dashboard/updateClass/:id",
        element: <InstructorRoute><UpdateClass/></InstructorRoute>,
        loader: ({params}) => fetch(`https://fluengo-server-oq1dkczx0-md-ibnul.vercel.app/classes/oneClass/${params.id}`)
      },
      // student dashboard
      {
        path: "/dashboard/selectedClasses",
        element: <SelectedClasses />,
      },
      {
        path: "/dashboard/payOnline/:id",
        element: <PayOnline />,
        loader: ({params}) => fetch(`https://fluengo-server.vercel.app/classes/selected/pay/${params.id}`)
      },
      {
        path: "/dashboard/enrollClasses",
        element: <EnrollClasses />,
      },
    ]
  },
  
]);
