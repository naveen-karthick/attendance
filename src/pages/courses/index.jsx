import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import { TeacherCourses } from "./teacherCourses/TeacherCourses";
import { StudentsCourses } from "./studentsCourses/StudentsCourses";

export const Courses = () => {
  const [value, setValue] = useState("teachers");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Teachers" value="teachers" />
          <Tab label="Students" value="students" />
        </Tabs>
      </div>

      <div className="flex justify-center mt-10">
        {value === "teachers" && <TeacherCourses />}
        {value === "students" && <StudentsCourses />}
      </div>
    </>
  );
};
