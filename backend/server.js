const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./config/db");

const userIntentRoutes = require("./routes/userIntentRoutes");
const contactRoutes = require("./routes/contactRoutes");
const awardRoutes = require("./routes/awardRoutes");
const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/payment");
const eventRoutes = require("./routes/event");

dotenv.config();
connectDB();

const app = express();

// ✅ Helmet for basic security headers
app.use(helmet({ contentSecurityPolicy: false }));

// ✅ Parse JSON requests
app.use(express.json());

// ✅ 🚨 Completely Disable CORS (development only)
app.use(cors()); // Allow all origins
app.options("*", cors()); // Allow all preflight

// ✅ Optional: log requests
app.use((req, res, next) => {
  console.log("📡", req.method, req.path);
  next();
});

// ✅ API Routes
app.use("/api/user-intent", userIntentRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/awards", awardRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/event", eventRoutes);

// ✅ Health check
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// ✅ Error handler
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);
  res.status(500).json({ error: "Server Error", details: err.message });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});