import { useState } from "react";

export default function ElectricityBill() {
  const [customerName, setCustomerName] = useState("");
  const [consumption, setConsumption] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "error" | "success"
  const [result, setResult] = useState(null);

  function handleCalculate() {
    if (customerName.trim() === "" || consumption.trim() === "") {
      setMessage("Please enter customer name and consumption.");
      setMessageType("error");
      setResult(null);
      return;
    }

    const kwh = Number(consumption);

    if (isNaN(kwh) || kwh < 0) {
      setMessage("Consumption must be a valid non-negative number.");
      setMessageType("error");
      setResult(null);
      return;
    }

    let rate;
    if (kwh <= 100) rate = 10;
    else if (kwh <= 200) rate = 12;
    else if (kwh <= 300) rate = 15;
    else rate = 18;

    const totalBill = kwh * rate;
    const usageStatus =
      totalBill >= 5000 ? "High Electricity Usage" : "Normal Electricity Usage";

    setResult({
      name: customerName,
      consumption: kwh,
      rate,
      totalBill,
      usageStatus,
    });

    setMessage("Bill calculated!");
    setMessageType("success");
  }

  function handleClear() {
    setCustomerName("");
    setConsumption("");
    setMessage("");
    setMessageType("");
    setResult(null);
  }

  return (
    <div className="activity-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Electricity Bill Calculator</h2>
          <p>Activity 4</p>
        </div>

        <div className="auth-body">
          <div className="form-group">
            <label>Customer Name</label>
            <input
              type="text"
              placeholder="Enter customer name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Consumption (kWh)</label>
            <input
              type="number"
              placeholder="Enter consumption in kWh"
              value={consumption}
              onChange={(e) => setConsumption(e.target.value)}
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
            <button className="btn-primary" onClick={handleCalculate}>
              Calculate Bill
            </button>
            <button className="btn-secondary" onClick={handleClear}>
              Clear
            </button>
          </div>

          {result && (
            <div className="welcome-panel">
              <h3>Result</h3>
              <p>
                <strong>Customer Name:</strong> {result.name}
              </p>
              <p>
                <strong>Consumption:</strong> {result.consumption} kWh
              </p>
              <p>
                <strong>Rate Applied:</strong> ₱{result.rate} per kWh
              </p>
              <p>
                <strong>Total Bill:</strong> ₱
                {result.totalBill.toLocaleString()}
              </p>
              <p>
                <strong>Usage Status:</strong> {result.usageStatus}
              </p>
            </div>
          )}

          <p className="hint-text">
            0-100 kWh: ₱10 · 101-200 kWh: ₱12 · 201-300 kWh: ₱15 · Above 300
            kWh: ₱18 per kWh
          </p>
        </div>
      </div>
    </div>
  );
}
