import Sidebar from "../components/Sidebar";

export default function Analytics() {
  return (
    <>
      <Sidebar />

      <div style={content}>

        <h1>Analytics Overview</h1>

        <div style={cards}>

          <div style={card}>
            <h3>Total Leads</h3>
            <h2>120</h2>
            <p>+12%</p>
          </div>

          <div style={card}>
            <h3>Conversion Rate</h3>
            <h2>25.5%</h2>
            <p>+2.3%</p>
          </div>

          <div style={card}>
            <h3>Avg Response Time</h3>
            <h2>2h 15m</h2>
            <p>+6%</p>
          </div>

          <div style={card}>
            <h3>Automation Success</h3>
            <h2>92.3%</h2>
            <p>+6.4%</p>
          </div>

        </div>

        <div style={charts}>

          <div style={chart}>
            <h3>Leads Over Time</h3>
            <p>Chart will come here later</p>
          </div>

          <div style={chart}>
            <h3>Leads by Source</h3>
            <p>Pie chart will come here later</p>
          </div>

        </div>

      </div>
    </>
  );
}

const content = {
  marginLeft: "240px",
  padding: "40px"
};

const cards = {
  display: "flex",
  gap: "20px",
  marginTop: "30px"
};

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "200px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)"
};

const charts = {
  display: "flex",
  gap: "20px",
  marginTop: "40px"
};

const chart = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "400px",
  height: "200px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)"
};