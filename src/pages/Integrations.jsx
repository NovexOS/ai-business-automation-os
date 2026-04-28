import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Integrations() {

  const [popup, setPopup] = useState(null);
  const [input, setInput] = useState("");

  const openPopup = (service) => {
    setPopup(service);
  };

  const closePopup = () => {
    setPopup(null);
    setInput("");
  };

  const saveIntegration = () => {
    alert(popup + " connected successfully");
    closePopup();
  };

  return (
    <>
      <Sidebar />

      <div style={content}>
        <h1>Integrations</h1>

        <div style={grid}>

          <div style={card}>
            <h3>WhatsApp</h3>
            <p>Connect WhatsApp to capture and reply to leads automatically.</p>
            <button style={btn} onClick={() => openPopup("WhatsApp")}>
              Connect
            </button>
          </div>

          <div style={card}>
            <h3>Email</h3>
            <p>Send automated emails and follow ups to leads.</p>
            <button style={btn} onClick={() => openPopup("Email")}>
              Connect
            </button>
          </div>

          <div style={card}>
            <h3>CRM Sync</h3>
            <p>Sync leads with your CRM system.</p>
            <button style={btn} onClick={() => openPopup("CRM")}>
              Connect
            </button>
          </div>

          <div style={card}>
            <h3>Webhook / API</h3>
            <p>Send lead data to any external software.</p>
            <button style={btn} onClick={() => openPopup("Webhook API")}>
              Setup
            </button>
          </div>

        </div>
      </div>

      {popup && (
        <div style={overlay}>
          <div style={modal}>
            <h2>{popup} Integration</h2>

            <input
              type="text"
              placeholder="Enter API Key / Phone / Email"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={inputStyle}
            />

            <div style={{ marginTop: "20px" }}>
              <button style={btn} onClick={saveIntegration}>
                Save
              </button>

              <button style={cancelBtn} onClick={closePopup}>
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

    </>
  );
}

const content = {
  marginLeft: "240px",
  padding: "40px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 300px)",
  gap: "30px",
  marginTop: "40px"
};

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)"
};

const btn = {
  padding: "10px 18px",
  border: "none",
  background: "#4F46E5",
  color: "white",
  borderRadius: "6px",
  cursor: "pointer",
  marginRight: "10px"
};

const cancelBtn = {
  padding: "10px 18px",
  border: "none",
  background: "gray",
  color: "white",
  borderRadius: "6px",
  cursor: "pointer"
};

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const modal = {
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  width: "350px",
  textAlign: "center"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};