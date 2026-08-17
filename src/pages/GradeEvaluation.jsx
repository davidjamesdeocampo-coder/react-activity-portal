import { useState } from "react";

export default function GradeEvaluation() {
  const [studentName, setStudentName] = useState("");
  const [score, setScore] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [result, setResult] = useState(null);

  function handleEvaluate() {
    if (studentName.trim() === "" || score.trim() === "") {
      setMessage("Please enter student name and score.");
      setMessageType("error");
      setResult(null);
      return;
    }

    const numericScore = Number(score);

    if (isNaN(numericScore)) {
      setMessage("Score must be a valid number.");
      setMessageType("error");
      setResult(null);
      return;
    }

    let remarks;

    if (numericScore < 0 || numericScore > 100) {
      remarks = "Invalid score";
      setMessage("Score must be between 0 and 100.");
      setMessageType("error");
    } else {
      if (numericScore >= 90) remarks = "Excellent";
      else if (numericScore >= 85) remarks = "Very Good";
      else if (numericScore >= 80) remarks = "Good";
      else if (numericScore >= 75) remarks = "Passed";
      else remarks = "Failed";

      setMessage("Evaluation complete!");
      setMessageType("success");
    }

    setResult({
      name: studentName,
      score: numericScore,
      remarks,
    });
  }

  function handleClear() {
    setStudentName("");
    setScore("");
    setMessage("");
    setMessageType("");
    setResult(null);
  }

  return (
    <div className="activity-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Student Grade Evaluation</h2>
          <p>Activity 2</p>
        </div>

        <div className="auth-body">
          <div className="form-group">
            <label>Student Name</label>
            <input
              type="text"
              placeholder="Enter student name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Score</label>
            <input
              type="number"
              placeholder="Enter score (0-100)"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>

          {message && (
            <div className={messageType === "error" ? "alert alert-error" : "alert alert-success"}>
              {message}
            </div>
          )}

          <div className="button-row">
            <button className="btn-primary" onClick={handleEvaluate}>
              Evaluate
            </button>
            <button className="btn-secondary" onClick={handleClear}>
              Clear
            </button>
          </div>

          {result && (
            <div className="welcome-panel">
              <h3>Result</h3>
              <p><strong>Student Name:</strong> {result.name}</p>
              <p><strong>Score:</strong> {result.score}</p>
              <p><strong>Remarks:</strong> {result.remarks}</p>
            </div>
          )}

          <p className="hint-text">
            90-100: Excellent  85-89: Very Good  80-84: Good  75-79: Passed  Below 75: Failed
          </p>
        </div>
      </div>
    </div>
  );
}

