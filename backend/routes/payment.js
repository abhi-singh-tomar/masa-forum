// routes/payment.js

const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();
const crypto = require("crypto");

const razorpay = new Razorpay({
  key_id: "rzp_test_8rWvfXKX4rYWSy", // replace with your key_id
  key_secret: "yZLOaneiKnVWUaVjzGDto2em",    // replace with your key_secret
});

router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;
    const options = {
      amount: amount * 100, // convert to paisa
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`,
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});
// Payment signature verification route
router.post("/verify", (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = req.body;
  const generatedSignature = crypto
  .createHmac("sha256", razorpay.key_secret)
  .update(`${razorpay_order_id}|${razorpay_payment_id}`)
  .digest("hex");

if (generatedSignature === razorpay_signature) {
  // Payment is legitimate
  res.status(200).json({ message: "Payment verified successfully" });
} else {
  // Signature mismatch = fraud or error
  res.status(400).json({ message: "Invalid signature. Verification failed" });
}
});

module.exports = router;
