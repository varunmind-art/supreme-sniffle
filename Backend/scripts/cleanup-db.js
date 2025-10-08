/**
 * Script to clean up MongoDB test/development data.
 * Usage: node scripts/cleanup-db.js
 */
require("dotenv").config();
const mongoose = require("mongoose");
const Trade = require("../models/trade");
const Config = require("../models/config");
const User = require("../models/user");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/delta-bot";

async function cleanup() {
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  await Trade.deleteMany({});
  await Config.deleteMany({});
  await User.deleteMany({});
  console.log("Database cleaned up.");
  mongoose.disconnect();
}

cleanup().catch((e) => {
  console.error(e);
  mongoose.disconnect();
});
