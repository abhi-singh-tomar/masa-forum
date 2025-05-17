const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userIntentRoutes = require("./routes/userIntentRoutes");
const contactRoutes = require("./routes/contactRoutes");
const awardRoutes = require("./routes/awardRoutes");
const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/payment");

dotenv.config();

const app = express();
app.use(express.json());

// Configure CORS to allow only your frontend
app.use(cors({
    origin: ['https://masaforum.com', 'http://localhost:3000'], // Allow only your Netlify frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    credentials: true // If you need to send cookies or auth headers
}));

// Connect to Database
connectDB();

// Define Routes
app.use("/api/user-intent", userIntentRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/awards", awardRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/payment", paymentRoutes);

// Default Route
app.get("/", (req, res) => {
    res.send("🚀 API is running...");
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("❌ Error:", err.message);
    res.status(500).json({ error: "Server Error" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});