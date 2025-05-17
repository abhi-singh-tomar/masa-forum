const mongoose = require('mongoose');

  const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    receipt: { type: String, required: true },
    status: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
    userId: { type: String }, // Optional, for logged-in users
    name: { type: String, required: true },   // User's name
    contact: { type: String, required: true }, // User's contact (phone or email)
    createdAt: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Order', orderSchema);