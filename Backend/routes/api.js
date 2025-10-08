const express = require("express");
const router = express.Router();

const { getConfig, updateConfig } = require("../config/config");
const { placeTrade, getTrades } = require("../bot/bot");

// GET /api/trades
router.get("/trades", async (req, res) => {
  const trades = await getTrades();
  res.json(trades);
});

// POST /api/trades
router.post("/trades", async (req, res) => {
  const trade = await placeTrade(req.body);
  res.status(201).json(trade);
});

// GET /api/config
router.get("/config", async (req, res) => {
  const config = await getConfig();
  res.json(config);
});

// PUT /api/config
router.put("/config", async (req, res) => {
  const config = await updateConfig(req.body);
  res.json(config);
});

module.exports = router;
