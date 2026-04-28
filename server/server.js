const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
 res.send("AI Business Automation OS Backend Running")
})

app.use("/api/auth", authRoutes)

const PORT = 5000

app.listen(PORT, () => {
 console.log("Server running on port " + PORT)
})