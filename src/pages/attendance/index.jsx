import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import { StudentsAttendance } from "./studentsAttendance/StudentsAttendance";
import { TeacherAttendance } from "./teacherAttendance/TeacherAttendance";

export const Attendance = () => {
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
        {value === "teachers" && <TeacherAttendance />}
        {value === "students" && <StudentsAttendance />}
      </div>
    </>
  );
};
