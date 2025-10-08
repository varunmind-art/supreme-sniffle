/**
 * Script to initialize MongoDB with default config and trades.
 * Usage: node scripts/init-db.js
 */
require("dotenv").config();
const mongoose = require("mongoose");
const Config = require("../models/config");
const Trade = require("../models/trade");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/delta-bot";

async function seed() {
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  // Default config
  const config = await Config.findOne() || await Config.create({
    riskLevel: "Medium",
    maxPosition: 5,
    autoTrade: true,
  });
  console.log("Config initialized:", config);

  // Example trades
  const trades = [
    {
      type: "Call",
      strike: 28000,
      expiry: new Date("2025-10-15"),
      premium: 0.12,
      quantity: 2,
      status: "Open",
    },
    {
      type: "Put",
      strike: 26000,
      expiry: new Date("2025-10-12"),
      premium: 0.18,
      quantity: 1,
      status: "Closed",
    },
  ];

  await Trade.deleteMany({});
  await Trade.insertMany(trades);
  console.log("Trades initialized.");

  mongoose.disconnect();
}

seed().catch((e) => {
  console.error(e);
  mongoose.disconnect();
});
