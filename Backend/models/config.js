const mongoose = require("mongoose");

const configSchema = new mongoose.Schema({
  riskLevel: { type: String, enum: ["Low", "Medium", "High"], default: "Medium" },
  maxPosition: { type: Number, default: 5 },
  autoTrade: { type: Boolean, default: true },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Config", configSchema);
