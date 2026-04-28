const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const users = require("../models/User")

exports.signup = async (req, res) => {

 const { name, email, password } = req.body

 if (!name || !email || !password) {
  return res.status(400).json({ message: "All fields required" })
 }

 const existingUser = users.find(u => u.email === email)

 if (existingUser) {
  return res.status(400).json({ message: "User already exists" })
 }

 const hashedPassword = await bcrypt.hash(password, 10)

 const newUser = {
  id: Date.now(),
  name,
  email,
  password: hashedPassword
 }

 users.push(newUser)

 res.json({
  message: "Signup successful",
  user: {
   id: newUser.id,
   name: newUser.name,
   email: newUser.email
  }
 })

}

exports.login = async (req, res) => {

 const { email, password } = req.body

 const user = users.find(u => u.email === email)

 if (!user) {
  return res.status(400).json({ message: "User not found" })
 }

 const validPassword = await bcrypt.compare(password, user.password)

 if (!validPassword) {
  return res.status(400).json({ message: "Invalid password" })
 }

 const token = jwt.sign(
  { id: user.id },
  "supersecretkey",
  { expiresIn: "7d" }
 )

 res.json({
  message: "Login successful",
  token,
  user: {
   id: user.id,
   name: user.name,
   email: user.email
  }
 })

}