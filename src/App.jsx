import { Link, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Attendance } from "./pages/Attendance";
import { Courses } from "./pages/Courses";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="attendance/*" element={<Attendance />} />
          <Route path="courses/*" element={<Courses />} />
        </Route>
      </Routes>
    </div>
  );
}
