const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact"); // Import the Contact model

// POST route to receive form data
router.post("/", async (req, res) => {
    try {
        console.log('Received Contact Form Data:', req.body);
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const newMessage = new Contact({ name, email, message });
        await newMessage.save();
        res.status(201).json({ success: true, message: "Message received successfully!" });
    } catch (error) {
        console.error('Error Saving Contact:', error);
        res.status(500).json({ error: "Server error, please try again later." });
    }
});



module.exports = router;
