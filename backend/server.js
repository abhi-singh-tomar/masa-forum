const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userIntentRoutes = require("./routes/userIntentRoutes");
const contactRoutes = require("./routes/contactRoutes");
const awardRoutes = require("./routes/awardRoutes");
const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/payment");
const Razorpay = require("razorpay");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Configure CORS to allow requests only from your frontend
app.use(cors({
  origin: 'https://masaforum.com',
  credentials: true, // If you plan to use cookies or auth headers
}));

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

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

// Payment Route (create-order)
app.post("/api/payment/create-order", async (req, res, next) => {
  try {
    const { amount } = req.body;

    if (!amount || isNaN(amount)) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const options = {
      amount: amount * 100, // Convert to paisa
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    next(err); // Pass to global error handler
  }
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