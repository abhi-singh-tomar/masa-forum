const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userIntentRoutes = require("./routes/userIntentRoutes");
const contactRoutes = require("./routes/contactRoutes");
const awardRoutes = require("./routes/awardRoutes");
const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/payment");
const eventRoutes = require('./routes/event');

dotenv.config();

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://www.masaforum.com");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    if (req.method === "OPTIONS") {
        return res.sendStatus(204); // 👈 Preflight request ends here
    }
    next();
});

// Configure CORS to allow only your frontend
const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, Postman)
        if (!origin) return callback(null, true);
        if (
            ['https://www.masaforum.com', 'http://localhost:3000'].indexOf(origin) !== -1
        ) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};

app.use(cors(corsOptions));


// Connect to Database
connectDB();

// Define Routes
app.use("/api/user-intent", userIntentRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/awards", awardRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/payment", paymentRoutes);
app.use('/api/event', eventRoutes);


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