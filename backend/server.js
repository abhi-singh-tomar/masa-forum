const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userIntentRoutes = require("./routes/userIntentRoutes"); // ✅ FIXED: Import userIntentRoutes
const contactRoutes = require("./routes/contactRoutes");
const awardRoutes = require("./routes/awardRoutes");
const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/payment");
const Razorpay = require("razorpay");



dotenv.config();

const app = express();
app.use(express.json()); // ✅ Ensure express can parse JSON
app.use(cors()); // ✅ Allow frontend requests
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
  });

// ✅ Connect to Database
connectDB();

// ✅ Define Routes
app.use("/api/user-intent", userIntentRoutes); // ✅ Fix missing route
app.use("/api/contact", contactRoutes);
app.use("/api/awards", awardRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/payment", paymentRoutes);



// ✅ Default Route
app.get("/", (req, res) => {
    res.send("🚀 API is running...");
});

// ✅ Global Error Handler
app.use((err, req, res, next) => {
    console.error("❌ Error:", err.message);
    res.status(500).json({ error: "Server Error" });
});

app.post("/api/payment/create-order", async (req, res) => {
    try {
      const { amount } = req.body;
  
      const options = {
        amount: amount * 100, // convert to paisa
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
      };
  
      const order = await razorpay.orders.create(options);
      res.json(order);
    } catch (err) {
      console.error("Error creating order:", err);
      res.status(500).send("Something went wrong");
    }
  });

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
