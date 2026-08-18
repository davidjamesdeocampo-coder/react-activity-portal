import { useState } from "react";

export default function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);

  function handleCheckPassword() {
    const len = password.length;

    if (len === 0) {
      setResult({
        status: "Empty",
        message: "Please enter a password.",
        alertClass: "alert-empty"
      });
    } else if (len < 6) {
      setResult({
        status: "Weak",
        message: "Create a stronger password.",
        alertClass: "alert-error"
      });
    } else if (len >= 6 && len <= 9) {
      setResult({
        status: "Medium",
        message: "Create a stronger password.",
        alertClass: "alert-warning"
      });
    } else {
      setResult({
        status: "Strong",
        message: "You can use this password.",
        alertClass: "alert-success"
      });
    }
  }

  function handleClear() {
    setPassword("");
    setResult(null);
  }

  return (
    <div className="activity-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Password Strength Checker</h2>
          <p>Activity 3</p>
        </div>

        <div className="auth-body">
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="hint-text" style={{ textAlign: "left", marginTop: "4px" }}>
              Character count: {password.length}
            </p>
          </div>

          <button className="btn-primary" onClick={handleCheckPassword}>
            Check Password
          </button>

          <button className="btn-secondary" onClick={handleClear}>
            Clear
          </button>

          {result && (
            <div className={`alert ${result.alertClass}`} style={{ marginTop: "20px" }}>
              <h3 style={{ margin: "0 0 6px 0", fontSize: "1.1rem" }}>
                Password Status: {result.status}
              </h3>
              <p style={{ margin: 0 }}>{result.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}