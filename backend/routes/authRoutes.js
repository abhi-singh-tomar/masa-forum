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
