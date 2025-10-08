const Trade = require("../models/trade");
const Config = require("../models/config");
const logger = require("../utils/logger");

// Example: Place a new trade
async function placeTrade({ type, strike, expiry, premium, quantity }) {
  const trade = new Trade({ type, strike, expiry, premium, quantity });
  await trade.save();
  logger.info("Trade placed:", trade);
  return trade;
}

// Example: Get all trades
async function getTrades() {
  return Trade.find({});
}

// Example: Run bot logic (placeholder)
async function runBot() {
  const config = await Config.findOne();
  // Implement strategy using config
  logger.info("Bot running with config:", config);
}

module.exports = { placeTrade, getTrades, runBot };
