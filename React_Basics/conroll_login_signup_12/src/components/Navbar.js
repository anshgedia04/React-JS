import React from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar({ isLoggedIn, setLogin }) {
  return (
    <nav className="w-full bg-slate-700 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="flex space-x-4">
          {!isLoggedIn && (
            <>
              <NavLink
                to="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Signup
              </NavLink>
            </>
          )}
          {isLoggedIn && (
            <button
              onClick={() => {
                setLogin(false);
                toast.success("Logged out successfully");
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
