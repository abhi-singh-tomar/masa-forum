const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();
const crypto = require("crypto");
const Order = require("../models/Order");
const Payment = require("../models/Payment");

const razorpay = new Razorpay({
  key_id: "rzp_test_8rWvfXKX4rYWSy", // replace with your key_id
  key_secret: "yZLOaneiKnVWUaVjzGDto2em", // replace with your key_secret
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

    // Save order to database
    await Order.create({
      orderId: order.id,
      amount: amount,
      currency: order.currency,
      receipt: order.receipt,
      status: "pending",
      createdAt: new Date(),
    });

    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Payment signature verification route
router.post("/verify", async (req, res) => {
  try {
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
      // Save payment to database
      await Payment.create({
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        status: "success",
        createdAt: new Date(),
      });

      // Update order status
      await Order.updateOne(
        { orderId: razorpay_order_id },
        { status: "paid" }
      );

      res.status(200).json({ message: "Payment verified successfully" });
    } else {
      // Save failed payment attempt
      await Payment.create({
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        status: "failed",
        createdAt: new Date(),
      });

      res.status(400).json({ message: "Invalid signature. Verification failed" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;