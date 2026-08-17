export default function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">R</span>
        <span className="navbar-title">React Activity Portal</span>
      </div>

      <div className="navbar-links">
        <button
          className={activePage === "home" ? "nav-link active" : "nav-link"}
          onClick={() => setActivePage("home")}
        >
          Home
        </button>
        <button
          className={activePage === "login" ? "nav-link active" : "nav-link"}
          onClick={() => setActivePage("login")}
        >
          Activity 1
        </button>
        <button
          className={activePage === "grade" ? "nav-link active" : "nav-link"}
          onClick={() => setActivePage("grade")}
        >
          Activity 2
        </button>
        <button
          className={activePage === "password" ? "nav-link active" : "nav-link"}
          onClick={() => setActivePage("password")}
        >
          Activity 3
        </button>
        <button
          className={activePage === "bill" ? "nav-link active" : "nav-link"}
          onClick={() => setActivePage("bill")}
        >
          Activity 4
        </button>
        <button
          className={activePage === "attendance" ? "nav-link active" : "nav-link"}
          onClick={() => setActivePage("attendance")}
        >
          Activity 5
        </button>
      </div>
    </nav>
  );
}
