import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { useState } from "react";

export const Header = ({ menuOpen, updateToggleMenu }) => {
  return (
    <div className="flex justify-between text-2xl bg-header">
      <div className="flex items-center pl-4">
        <div onClick={updateToggleMenu} className="cursor-pointer">
          <div
            className={`w-10 h-1.5 ${
              menuOpen ? "bg-closed" : "bg-open"
            } duration-500 m-2 ${menuOpen && "changed-menu-1"}`}
          ></div>
          <div
            className={`w-10 h-1.5 bg-open duration-500 m-2 ${
              menuOpen && "opacity-0"
            }`}
          ></div>
          <div
            className={`w-10 h-1.5 ${
              menuOpen ? "bg-closed" : "bg-open"
            } duration-500 m-2 ${menuOpen && "changed-menu-2"}`}
          ></div>
        </div>
        <h2 className="font-bold p-5">Attendance</h2>
      </div>
      <nav className="nav-links list-none flex">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bg-active h-full block py-5 px-10" : "inactive h-full block py-5 px-10"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/attendance"
            className={({ isActive }) =>
              isActive ? "bg-active h-full block py-5 px-10" : "inactive h-full block py-5 px-10"
            }
          >
            Attendace
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "bg-active h-full block py-5 px-10" : "inactive h-full block py-5 px-10"
            }
          >
            Courses
          </NavLink>
        </li>
      </nav>
    </div>
  );
};
