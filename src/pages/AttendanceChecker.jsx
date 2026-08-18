import { useState } from "react";

export default function AttendanceChecker() {
  const [employeeName, setEmployeeName] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [result, setResult] = useState(null);

  function handleCheckAttendance() {
    if (employeeName.trim() === "" || timeIn === "") {
      setMessage("Please enter employee name and time in.");
      setMessageType("error");
      setResult(null);
      return;
    }
    const [hours, minutes] = timeIn.split(":").map(Number);
    const decimalTime = hours + minutes / 60;
    let attendanceStatus;
    let followUpMessage;

    if (decimalTime <= 8) {
      attendanceStatus = "On Time";
      followUpMessage = "Status: On Time - Good job!";
    } else if (decimalTime <= 9) {
      attendanceStatus = "Late";
      followUpMessage = "Status: Late - Please be on time tomorrow.";
    } else {
      attendanceStatus = "Very Late";
      followUpMessage =
        "Status: Very Late - Report to your supervisor.";
    }

    const displayTime = new Date(
      `2000-01-01T${timeIn}`
    ).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });

    setResult({
      name: employeeName,
      timeIn: displayTime,
      attendanceStatus,
      followUpMessage,
    });

    setMessage("Attendance checked!");
    setMessageType("success");
  }

  function handleReset() {
    setEmployeeName("");
    setTimeIn("");
    setMessage("");
    setMessageType("");
    setResult(null);
  }

  return (
    <div className="activity-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Employee Attendance Checker</h2>
          <p>Activity 5</p>
        </div>

        <div className="auth-body">
          <div className="form-group">
            <label>Employee Name</label>
            <input
              type="text"
              placeholder="Enter employee name"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Time In</label>
            <input
              type="time"
              value={timeIn}
              onChange={(e) => setTimeIn(e.target.value)}
            />
          </div>

          {message && (
            <div
              className={
                messageType === "error"
                  ? "alert alert-error"
                  : "alert alert-success"
              }
            >
              {message}
            </div>
          )}

          <div className="button-row">
            <button
              className="btn-primary"
              onClick={handleCheckAttendance}
            >
              Check Attendance
            </button>

            <button
              className="btn-secondary"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>

          {result && (
            <div className="welcome-panel">
              <h3>Result</h3>

              <p>
                <strong>Employee Name:</strong> {result.name}
              </p>

              <p>
                <strong>Time In:</strong> {result.timeIn}
              </p>

              <p>
                <strong>Attendance Status:</strong>{" "}
                {result.attendanceStatus}
              </p>

              <p>
                <strong>Message:</strong> {result.followUpMessage}
              </p>
            </div>
          )}

          <p className="hint-text">
            8:00 AM or earlier: On Time · After 8:00 AM to 9:00 AM: Late ·
            After 9:00 AM: Very Late
          </p>
        </div>
      </div>
    </div>
  );
}