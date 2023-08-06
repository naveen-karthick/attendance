import { Link, NavLink, Outlet } from "react-router-dom";
import { Header } from "../components/header/header";
import { useState } from "react";

export const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const updateToggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  return (
    <div>
      <Header menuOpen={menuOpen} updateToggleMenu={updateToggleMenu} />
      <div className="main-section flex h-screen">
        <div
          className={`w-60 bg-slate-600 list-none -translate-x-96 duration-500 ${
            menuOpen && "translate-x-0"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-active p-10 flex justify-center"
                  : "inactive p-10 flex justify-center"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="attendance"
              className={({ isActive }) =>
                isActive
                  ? "bg-active p-10 flex justify-center"
                  : "inactive p-10 flex justify-center"
              }
            >
              Attendance
            </NavLink>
          </li>
          <li>
            <NavLink
              to="courses"
              className={({ isActive }) =>
                isActive
                  ? "bg-active p-10 flex justify-center"
                  : "inactive p-10 flex justify-center"
              }
            >
              Courses
            </NavLink>
          </li>
        </div>
        <div
          className={`main-content duration-500 flex flex-grow ${
            !menuOpen && "-translate-x-60"
          } p-5`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
