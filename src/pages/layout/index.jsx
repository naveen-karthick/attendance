import Drawer from "@mui/material/Drawer";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Header } from "../../components/header/header";

export const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  console.log(location.pathname);

  const updateToggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  return (
    <div>
      <Header menuOpen={menuOpen} updateToggleMenu={updateToggleMenu} />
      <div className="main-section h-screen">
        <Drawer anchor={"left"} open={menuOpen} onClose={updateToggleMenu}>
          <div className="mt-16">
            <MenuList>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-active" : "inactive"
                }
              >
                <MenuItem
                  onClick={updateToggleMenu}
                  className={`${
                    !pathname.includes("/attendance") &&
                    !pathname.includes("/courses") &&
                    "bg-active"
                  }`}
                >
                  <button className="py-10 px-20 flex justify-center text-lg font-bold  border-b-2 border-l-sky-800 w-full">
                    Home
                  </button>
                </MenuItem>
              </NavLink>
              <NavLink to="attendance">
                <MenuItem
                  onClick={updateToggleMenu}
                  className={`${
                    pathname.includes("/attendance") && "bg-active"
                  }`}
                >
                  <button className="py-10 px-20 flex justify-center text-lg font-bold border-b-2 border-l-sky-800 w-full">
                    Attendance
                  </button>
                </MenuItem>
              </NavLink>
              <NavLink to="courses">
                <MenuItem
                  onClick={updateToggleMenu}
                  className={`${pathname.includes("/courses") && "bg-active"}`}
                >
                  <button className="py-10 px-20 flex justify-center text-lg font-bold border-b-2 border-l-sky-800 w-full">
                    Courses
                  </button>
                </MenuItem>
              </NavLink>
            </MenuList>
          </div>
        </Drawer>
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
