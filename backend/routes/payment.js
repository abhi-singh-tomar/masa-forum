const express = require("express");
  const Razorpay = require("razorpay");
  const router = express.Router();
  const crypto = require("crypto");
  const Order = require("../models/Order");
  const Payment = require("../models/Payment");
  require("dotenv").config();




const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY
});



  router.post("/create-order", async (req, res) => {
    try {
      const { amount, name, contact } = req.body;
      console.log("Creating order with amount:", amount, "for user:", name);
      if (!amount || isNaN(amount)) {
        console.error("Invalid amount:", amount);
        return res.status(400).json({ message: "Invalid amount" });
      }
      if (!name || !contact) {
        console.error("Missing user details:", { name, contact });
        return res.status(400).json({ message: "Name and contact are required" });
      }
      const options = {
        amount: amount * 100,
        currency: "INR",
        receipt: `receipt_order_${Date.now()}`
      };
      const order = await razorpay.orders.create(options);
   //   console.log("Order created:", order);

      await Order.create({
        orderId: order.id,
        amount: amount,
        currency: order.currency,
        receipt: order.receipt,
        status: "pending",
        name: name,
        contact: contact,
        createdAt: new Date()
      });
    //  console.log("Order saved to DB:", { orderId: order.id, name, contact });

      res.json(order);
    } catch (err) {
      console.error("Error in create-order:", err.message);
      res.status(500).json({ message: "Something went wrong", error: err.message });
    }
  });

  router.post("/verify", async (req, res) => {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    //  console.log("Verifying payment:", { razorpay_order_id, razorpay_payment_id });
      const generatedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY
)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

      if (generatedSignature === razorpay_signature) {
        await Payment.create({
          orderId: razorpay_order_id,
          paymentId: razorpay_payment_id,
          status: "success",
          createdAt: new Date()
        });
      //  console.log("Payment saved to DB:", { paymentId: razorpay_payment_id });

        await Order.updateOne(
          { orderId: razorpay_order_id },
          { status: "paid" }
        );
     //   console.log("Order updated to paid:", { orderId: razorpay_order_id });

        res.status(200).json({ message: "Payment verified successfully" });
      } else {
        await Payment.create({
          orderId: razorpay_order_id,
          paymentId: razorpay_payment_id,
          status: "failed",
          createdAt: new Date()
        });
        console.log("Failed payment saved to DB:", { paymentId: razorpay_payment_id });

        res.status(400).json({ message: "Invalid signature. Verification failed" });
      }
    } catch (err) {
      console.error("Error in verify:", err.message);
      res.status(500).json({ message: "Something went wrong", error: err.message });
    }
  });

  module.exports = router;