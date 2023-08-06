import { NavLink, Route, Routes } from "react-router-dom";

export const Attendance = () => {
  return (
    <>
      <div className="w-64 bg-slate-100 mr-10">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/attendance/teachers"
                className={({ isActive }) =>
                  isActive
                    ? "bg-active p-5 flex justify-center"
                    : "inactive p-5 flex justify-center"
                }
              >
                Teachers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/attendance/students"
                className={({ isActive }) =>
                  isActive
                    ? "bg-active p-5 flex justify-center"
                    : "inactive p-5 flex justify-center"
                }
              >
                Students
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route
          path="/"
          index
          element={<h1>Welcome, select a section to continue</h1>}
        />
        <Route path="teachers" element={<h1>Teachers Attendance</h1>} />
        <Route path="students" element={<h1>Students Attendance</h1>} />
      </Routes>
    </>
  );
};
