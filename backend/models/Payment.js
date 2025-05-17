const mongoose = require('mongoose');

  const paymentSchema = new mongoose.Schema({
    orderId: { type: String, required: true },
    paymentId: { type: String, required: true },
    status: { type: String, enum: ['success', 'failed'], required: true },
    userId: { type: String }, // Optional, for logged-in users
    createdAt: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Payment', paymentSchema);