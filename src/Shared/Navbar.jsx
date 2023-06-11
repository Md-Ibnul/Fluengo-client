import React from "react";
import logo from "../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import userPhoto from '../assets/placeholder.jpg'

const Navbar = () => {
  const { user, logOut, role } = useAuth();
  
  const handleLogOut = () => {
    logOut()
    .then(() => {})
  }
const navOption = (
  <>
  <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-600 border-b-2 bg" : "default"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              className={({ isActive }) =>
                isActive ? "text-red-600 border-b-2" : "default"
              }
            >
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allInstructor"
              className={({ isActive }) =>
                isActive ? "text-red-600 border-b-2" : "default"
              }
            >
              Instructors
            </NavLink>
          </li>
          {
            role && role === "Admin" ? 
            <li> <NavLink
              to="/dashboard/manageUsers"
              className={({ isActive }) =>
                isActive ? "text-red-600 border-b-2" : "default"
              }
            >
              Dashboard
            </NavLink>
            </li> : role === "Instructor" ? 
            <li> <NavLink
            to="/dashboard/insClasses"
            className={({ isActive }) =>
              isActive ? "text-red-600 border-b-2" : "default"
            }
          >
            Dashboard
          </NavLink></li> :
          <li> <NavLink
          to="/dashboard/selectedClasses"
          className={({ isActive }) =>
            isActive ? "text-red-600 border-b-2" : "default"
          }
        >
          Dashboard
        </NavLink></li>
          }
          <li>
            {
              user ? 
              <a onClick={handleLogOut}
              
            >
              Log Out
            </a> :
            <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-red-600 border-b-2" : "default"
            }
          >
            Login
          </NavLink>
            }
          </li>
  </>
)


  return (
    <div className="navbar bg-base-100 border-b-2 drop-shadow-lg relative z-50 pe-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="">
          <img src={logo} alt="Logo" width={200} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 me-2 text-lg font-medium">
          {navOption}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user && user?.photoURL ? 
          <div className="avatar">
  <div className="w-14 rounded-full">
    <img className="tooltip" data-tip={user.email} src={user.photoURL} />
  </div>
</div> :
<div className="avatar">
  <div className="w-14 rounded-full">
    <img src={userPhoto} />
  </div>
</div>
        }
      </div>
    </div>
  );
};

export default Navbar;
