const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userIntentRoutes = require("./routes/userIntentRoutes"); // ✅ FIXED: Import userIntentRoutes
const contactRoutes = require("./routes/contactRoutes");
const awardRoutes = require("./routes/awardRoutes");
const authRoutes = require("./routes/authRoutes");



dotenv.config();

const app = express();
app.use(express.json()); // ✅ Ensure express can parse JSON
app.use(cors()); // ✅ Allow frontend requests

// ✅ Connect to Database
connectDB();

// ✅ Define Routes
app.use("/api/user-intent", userIntentRoutes); // ✅ Fix missing route
app.use("/api/contact", contactRoutes);
app.use("/api/awards", awardRoutes);
app.use("/api/auth", authRoutes);



// ✅ Default Route
app.get("/", (req, res) => {
    res.send("🚀 API is running...");
});

// ✅ Global Error Handler
app.use((err, req, res, next) => {
    console.error("❌ Error:", err.message);
    res.status(500).json({ error: "Server Error" });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
