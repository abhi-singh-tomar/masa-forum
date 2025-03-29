const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// 🔹 REGISTER ROUTE
router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, role, password } = req.body;

    // ✅ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ✅ Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create new user
    const newUser = new User({
      name,
      email,
      phone,
      role,
      password: hashedPassword,
    });

    // ✅ Save user to database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("❌ Error in Register Route:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔹 LOGIN ROUTE
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // ✅ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // ✅ Generate JWT Token
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "your_secret_key", // Use a secure key
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token, user });
  } catch (error) {
    console.error("❌ Error in Login:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all award applications
router.get("/", async (req, res) => {
  try {
      const applications = await AwardApplication.find();
      res.status(200).json(applications);
  } catch (error) {
      res.status(500).json({ error: "Server error while fetching applications." });
  }
});





module.exports = router;
