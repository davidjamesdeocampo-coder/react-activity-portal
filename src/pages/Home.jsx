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
      <section className="workspace-panel minimal-panel-only">
        <div className="hero-layout single-hero">
          <div className="hero-copy simplified-copy">
            <span className="workspace-pill">Workspace overview</span>
            <h1>React Activity Portal</h1>

            <div className="cta-row">
              <button className="primary-action" onClick={() => setActivePage("login")}>
                Open first activity
              </button>
              <button className="secondary-action" onClick={() => setActivePage("attendance")}>
                View attendance
              </button>
            </div>
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
