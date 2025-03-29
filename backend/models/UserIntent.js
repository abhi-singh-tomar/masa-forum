const mongoose = require("mongoose");

const userIntentSchema = new mongoose.Schema({
  intent: { type: String, required: true }, // ✅ Changed 'choice' to 'intent' for consistency
  createdAt: { type: Date, default: Date.now },
});

const UserIntent = mongoose.model("UserIntent", userIntentSchema);
module.exports = UserIntent;
