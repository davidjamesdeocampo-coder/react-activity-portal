import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GradeEvaluation from "./pages/GradeEvaluation";
import PasswordChecker from "./pages/PasswordChecker";
import ElectricityBill from "./pages/ElectricityBill";
import AttendanceChecker from "./pages/AttendanceChecker";
import "./App.css";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="app">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main className="content">
        {activePage === "home" && <Home setActivePage={setActivePage} />}
        {activePage === "login" && <Login />}
        {activePage === "grade" && <GradeEvaluation />}
        {activePage === "password" && <PasswordChecker />}
        {activePage === "bill" && <ElectricityBill />}
        {activePage === "attendance" && <AttendanceChecker />}
      </main>
    </div>
  );
}
