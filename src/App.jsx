import React from "react";
import StudentCard from "./components/StudentCard";
import "./App.css";

export default function App() {
  const activeStudents = [
    {
      name: "Aisha Reddy",
      rollNumber: "FS101",
      course: "Full Stack",
      email: "aisha@example.com",
      skills: ["JS", "React"],
      isActive: true,
    },
    {
      name: "Rohit Sharma",
      rollNumber: "FS102",
      course: "Full Stack",
      email: "rohit@example.com",
      skills: ["HTML", "CSS"],
      isActive: true,
    },
  ];

  const alumni = [
    {
      name: "Sneha Gupta",
      rollNumber: "FS001",
      course: "Full Stack",
      email: "sneha@example.com",
      skills: ["Angular"],
      isActive: false,
    },
    {
      name: "Aditya Verma",
      rollNumber: "FS002",
      course: "Full Stack",
      email: "aditya@example.com",
      skills: ["Python"],
      isActive: false,
    },
  ];

  const all = [...activeStudents, ...alumni];

  return (
    <div>
      <h1>Student Directory Portal </h1>
      <p>Total Students: {all.length}</p>

      <h2>Active Students</h2>
      <div className="students-container">
        {activeStudents.map((s) => (
          <StudentCard key={s.rollNumber} {...s} />
        ))}
      </div>

      <h2>Alumni</h2>
      <div className="students-container">
        {alumni.map((s) => (
          <StudentCard key={s.rollNumber} {...s} />
        ))}
      </div>

      <footer>
        <span>Full Stack </span>
        <span>hari@gmail.com </span>© 2025 Student Portal
      </footer>
    </div>
  );
}
