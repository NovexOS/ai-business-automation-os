import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#111",
        color: "white",
        position: "fixed",
        left: "0",
        top: "0",
        padding: "20px",
      }}
    >
      <h2>AI CRM</h2>

      <div style={{ marginTop: "40px" }}>

        <p>
          <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>
            Dashboard
          </Link>
        </p>

        <p style={{ marginTop: "20px" }}>
          <Link to="/leads" style={{ color: "white", textDecoration: "none" }}>
            Leads
          </Link>
        </p>

        <p style={{ marginTop: "20px" }}>
          <Link to="/automation" style={{ color: "white", textDecoration: "none" }}>
            Automation
          </Link>
        </p>

        <p style={{ marginTop: "20px" }}>
          <Link to="/messages" style={{ color: "white", textDecoration: "none" }}>
            Messages
          </Link>
        </p>

        <p style={{ marginTop: "20px" }}>
          <Link to="/analytics" style={{ color: "white", textDecoration: "none" }}>
            Analytics
          </Link>
        </p>

        <p style={{ marginTop: "20px" }}>
          <Link to="/integrations" style={{ color: "white", textDecoration: "none" }}>
            Integrations
          </Link>
        </p>

        <p style={{ marginTop: "20px" }}>
          <Link to="/settings" style={{ color: "white", textDecoration: "none" }}>
            Settings
          </Link>
        </p>

      </div>
    </div>
  );
}