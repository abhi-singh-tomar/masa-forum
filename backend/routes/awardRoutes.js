const express = require("express");
const router = express.Router();
const AwardApplication = require("../models/AwardApplicationModel"); // Import Model

// @route   POST /api/awards/apply
// @desc    Submit MASA Award application
// @access  Public
router.post("/apply", async (req, res) => {
    try {
        const { name, phone, email, address } = req.body;
        
        // Create new application entry
        const newApplication = new AwardApplication({ name, phone, email, address });
        
        // Save to database
        await newApplication.save();

        res.status(201).json({ message: "Application submitted successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Server error. Try again later." });
    }
});

module.exports = router;
