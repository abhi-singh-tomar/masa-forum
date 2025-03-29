const express = require("express");
const UserIntent = require("../models/UserIntent");

const router = express.Router();

// ✅ POST Route to Save User Intent
router.post("/", async (req, res) => {
  try {
    const { intent } = req.body; // ✅ Standardized field name

    if (!intent) {
      return res.status(400).json({ message: "❌ Intent is required" });
    }

    const newIntent = new UserIntent({ intent });
    await newIntent.save();

    res.status(201).json({ message: "✅ Data saved successfully!" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ message: "❌ Server Error" });
  }
});



module.exports = router;
