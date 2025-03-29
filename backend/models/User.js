const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true }, // ✅ Ensure correct field name
  password: { type: String, required: true },
  role: { type: String, enum: ["mentor", "student", "investor", "startup"], required: true }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
