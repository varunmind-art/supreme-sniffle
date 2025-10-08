const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema({
  type: { type: String, enum: ["Call", "Put"], required: true },
  strike: { type: Number, required: true },
  expiry: { type: Date, required: true },
  premium: { type: Number, required: true },
  quantity: { type: Number, required: true },
  status: { type: String, enum: ["Open", "Closed"], default: "Open" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

module.exports = mongoose.model("Trade", tradeSchema);
