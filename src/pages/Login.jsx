import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleLogin() {

    if (email === "" || password === "") {
      alert("Please enter email and password")
      return
    }

    try {

      setLoading(true)

      // fake authentication
      const user = {
        email: email
      }

      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem("token", "demo-token")

      alert("Login Successful")

      navigate("/dashboard")

    } catch (error) {

      console.log(error)
      alert("Server error")

    } finally {

      setLoading(false)

    }

  }

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >

      <div
        style={{
          width: "400px",
          padding: "40px",
          border: "1px solid #eee",
          borderRadius: "10px"
        }}
      >

        <h2>Welcome Back</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "10px"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "10px"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
            background: "#5b5bf7",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >

          {loading ? "Logging in..." : "Login"}

        </button>

        <p style={{ marginTop: "15px" }}>
          Don't have account?
          <Link to="/signup"> Signup</Link>
        </p>

      </div>

    </div>

  )

}