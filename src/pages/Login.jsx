import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "error" | "success"
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");

  function handleLogin() {
    if (username.trim() === "" && password.trim() === "") {
      setMessage("Please enter username and password.");
      setMessageType("error");
    } else if (username === "admin" && password === "12345") {
      setLoggedInUser(username);
      setIsLoggedIn(true);
      setMessage("Login successful!");
      setMessageType("success");
    } else {
      setMessage("Invalid username or password.");
      setMessageType("error");
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setMessage("");
    setMessageType("");
    setLoggedInUser("");
  }

  return (
    <div className="activity-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Login Authentication</h2>
          <p>Activity 1</p>
        </div>

        <div className="auth-body">
          {!isLoggedIn && (
            <>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {message && (
                <div className={messageType === "error" ? "alert alert-error" : "alert alert-success"}>
                  {message}
                </div>
              )}

              <button className="btn-primary" onClick={handleLogin}>
                Login
              </button>

              <p className="hint-text">
                Sample credentials — Username: admin, Password: 12345
              </p>
            </>
          )}

          {isLoggedIn && (
            <div className="welcome-panel">
              <div className="alert alert-success">Login successful!</div>
              <h3>Welcome, {loggedInUser}!</h3>
              <p className="hint-text">You are now logged in.</p>
              <button className="btn-secondary" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}