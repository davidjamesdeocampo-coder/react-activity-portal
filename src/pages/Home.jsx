export default function Home({ setActivePage }) {
  const activities = [
    {
      id: "login",
      number: "01",
      title: "Login Flow",
      description: "Secure access and role-based states for authentic user experiences.",
      accent: "violet",
    },
    {
      id: "grade",
      number: "02",
      title: "Grade Review",
      description: "Evaluate academic performance and instant remark logic visually.",
      accent: "gray",
    },
    {
      id: "password",
      number: "03",
      title: "Password Check",
      description: "Measure security strength in a clean and actionable feedback panel.",
      accent: "silver",
    },
    {
      id: "bill",
      number: "04",
      title: "Utility Billing",
      description: "Compute electricity cost with a lightweight calculation dashboard.",
      accent: "neutral",
    },
    {
      id: "attendance",
      number: "05",
      title: "Attendance Monitor",
      description: "Track punctuality with a compact and modern workforce checker.",
      accent: "dark",
    },
  ];

  return (
    <div className="home-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="hero-badge">Workspace overview</span>
          <h1>Build, test, and present every activity in one sleek portal.</h1>
          <p>
            Five interactive React tasks are organized into a modern command-center layout,
            designed for clarity, speed, and a cleaner presentation.
          </p>

          <div className="hero-actions">
            <button className="primary-action" onClick={() => setActivePage("login")}>
              Open first activity
            </button>
            <button className="secondary-action" onClick={() => setActivePage("attendance")}>
              View attendance
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="stats-card large">
            <div className="metric-topline">
              <span className="dot" />
              Live status
            </div>
            <div className="metric-value">99.2%</div>
            <div className="metric-label">Portal productivity</div>
          </div>

          <div className="stats-row">
            <div className="stats-card small">
              <span>Tasks</span>
              <strong>05</strong>
            </div>
            <div className="stats-card small accent">
              <span>Mode</span>
              <strong>Dark</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="insight-strip">
        <div className="insight-box">
          <label>Active modules</label>
          <strong>5</strong>
        </div>
        <div className="insight-box">
          <label>Average score</label>
          <strong>96%</strong>
        </div>
        <div className="insight-box">
          <label>Team status</label>
          <strong>Ready</strong>
        </div>
      </section>

      <section className="activity-showcase">
        {activities.map((activity) => (
          <article key={activity.id} className={`activity-card ${activity.accent}`}>
            <div className="activity-header">
              <span className="activity-number">{activity.number}</span>
              <span className="activity-tag">Activity</span>
            </div>

            <h3>{activity.title}</h3>
            <p>{activity.description}</p>

            <button className="card-btn" onClick={() => setActivePage(activity.id)}>
              Open module
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
