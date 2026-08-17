export default function Home({ setActivePage }) {
  return (
    <div className="home">
      <div className="home-hero">
        <h1>React Activity Portal</h1>
        <p>
          Five interactive React activities demonstrating state, events,
          conditional logic, validation, and calculations.
        </p>
      </div>

      <div className="card-grid">
        <div className="card">
          <span className="card-number">1</span>
          <h3>Login Authentication</h3>
          <p>Validate a username and password against sample credentials and manage login/logout state.</p>
          <button className="card-btn" onClick={() => setActivePage("login")}>Open Activity</button>
        </div>

        <div className="card">
          <span className="card-number">2</span>
          <h3>Student Grade Evaluation</h3>
          <p>Enter a student's score and get an automatic remark based on grade ranges.</p>
          <button className="card-btn" onClick={() => setActivePage("grade")}>Open Activity</button>
        </div>

        <div className="card">
          <span className="card-number">3</span>
          <h3>Password Strength Checker</h3>
          <p>Check password length and receive live feedback on how strong it is.</p>
          <button className="card-btn" onClick={() => setActivePage("password")}>Open Activity</button>
        </div>

        <div className="card">
          <span className="card-number">4</span>
          <h3>Electricity Bill Calculator</h3>
          <p>Calculate a customer's electricity bill based on kWh consumption and tiered rates.</p>
          <button className="card-btn" onClick={() => setActivePage("bill")}>Open Activity</button>
        </div>

        <div className="card">
          <span className="card-number">5</span>
          <h3>Employee Attendance Checker</h3>
          <p>Check an employee's time-in and determine whether they are on time, late, or very late.</p>
          <button className="card-btn" onClick={() => setActivePage("attendance")}>Open Activity</button>
        </div>
      </div>
    </div>
  );
}
