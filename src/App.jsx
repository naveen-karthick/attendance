import { Route, Routes } from "react-router-dom";
import { Attendance } from "./pages/attendance";
import { Courses } from "./pages/courses";
import { Layout } from "./pages/layout";
import { Home } from "./pages/home";

const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="attendance/*" element={<Attendance />} />
      <Route path="courses/*" element={<Courses />} />
    </Route>
  </Routes>
);

export default function App() {
  return (
    <div>
      <Router />
    </div>
  );
}
