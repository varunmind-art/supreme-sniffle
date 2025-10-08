const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// POST /api/auth/register
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: "Username and password required" });

  const existing = await User.findOne({ username });
  if (existing) return res.status(409).json({ message: "Username already exists" });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = new User({ username, passwordHash });
  await user.save();
  res.status(201).json({ message: "User registered" });
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && await bcrypt.compare(password, user.passwordHash)) {
    // Issue JWT token
    const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET || "changeme", { expiresIn: "1d" });
    res.json({ message: "Login successful", token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
