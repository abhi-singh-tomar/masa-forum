const mongoose = require("mongoose");

const AwardApplicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("AwardApplication", AwardApplicationSchema);
