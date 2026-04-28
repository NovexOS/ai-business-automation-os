import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // validation
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const user = {
      email: email,
      password: password
    };

    // save user
    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully");

    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f5f5f5"
      }}
    >
      <form
        onSubmit={handleSignup}
        style={{
          padding: "40px",
          background: "white",
          borderRadius: "10px",
          width: "320px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ textAlign: "center" }}>Create your account</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
            background: "#1a73e8",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Create Account
        </button>

        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Already have an account?
          <span
            style={{ color: "#1a73e8", cursor: "pointer", marginLeft: "5px" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signup;