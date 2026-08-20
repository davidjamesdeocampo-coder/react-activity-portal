export default function Home({ setActivePage }) {
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
      </section>
    </div>
  );
}
