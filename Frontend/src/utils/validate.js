// Basic validation helpers for forms and data

export function validateTrade(trade) {
  if (!trade.type || !["Call", "Put"].includes(trade.type)) return "Invalid option type";
  if (!trade.strike || trade.strike < 0) return "Invalid strike";
  if (!trade.expiry || isNaN(new Date(trade.expiry))) return "Invalid expiry date";
  if (!trade.premium || trade.premium < 0) return "Invalid premium";
  if (!trade.quantity || trade.quantity < 1) return "Invalid quantity";
  return null;
}

export function validateConfig(config) {
  if (!["Low", "Medium", "High"].includes(config.riskLevel)) return "Invalid risk level";
  if (config.maxPosition < 1) return "Max position must be at least 1";
  return null;
}
