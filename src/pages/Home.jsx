export default function Home({ setActivePage }) {
  const activities = [
    { id: "login", number: "01", title: "Login Flow", description: "Secure access and role-based states.", tag: "Activity" },
    { id: "grade", number: "02", title: "Grade Review", description: "Evaluate academic performance with clear logic.", tag: "Activity" },
    { id: "password", number: "03", title: "Password Check", description: "Measure security strength with live feedback.", tag: "Activity" },
    { id: "bill", number: "04", title: "Utility Billing", description: "Compute electricity cost with a clean calculator.", tag: "Activity" },
    { id: "attendance", number: "05", title: "Attendance Monitor", description: "Track punctuality with a lightweight checker.", tag: "Activity" },
  ];

  return (
    <div className="home-shell">
      <section className="workspace-panel">
        <div className="hero-layout">
          <div className="hero-copy">
            <span className="workspace-pill">Workspace overview</span>
            <h1>Build, test, and present every activity in one sleek portal.</h1>
            <p>
              Five interactive React tasks are organized into a modern command-center layout,
              designed for clarity, speed, and a cleaner presentation.
            </p>

            <div className="cta-row">
              <button className="primary-action" onClick={() => setActivePage("login")}>
                Open first activity
              </button>
              <button className="secondary-action" onClick={() => setActivePage("attendance")}>
                View attendance
              </button>
            </div>
          </div>

          <div className="stats-column">
            <div className="status-card large">
              <div className="status-header">
                <span className="live-dot" />
                <span>Live status</span>
              </div>
              <div className="stat-number">99.2%</div>
              <div className="stat-label">Portal productivity</div>
            </div>

            <div className="mini-grid">
              <div className="status-card small">
                <span className="label">Tasks</span>
                <strong>05</strong>
              </div>
              <div className="status-card small mode-card">
                <span className="label">Mode</span>
                <strong>Dark</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="summary-row">
          <div className="summary-item">
            <span>Active modules</span>
            <strong>5</strong>
          </div>
          <div className="summary-item">
            <span>Average score</span>
            <strong>96%</strong>
          </div>
          <div className="summary-item">
            <span>Team status</span>
            <strong>Ready</strong>
          </div>
        </div>

        <div className="module-grid">
          {activities.map((activity) => (
            <article key={activity.id} className="module-card">
              <div className="module-header">
                <span className="module-number">{activity.number}</span>
                <span className="module-tag">{activity.tag}</span>
              </div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <button className="module-button" onClick={() => setActivePage(activity.id)}>
                Open Activity
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
