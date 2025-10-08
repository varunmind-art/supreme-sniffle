// Utility for frontend to call backend API endpoints
const API_BASE = process.env.REACT_APP_API_BASE || "/api";

export async function fetchTrades() {
  const res = await fetch(`${API_BASE}/trades`);
  return res.json();
}

export async function placeTrade(trade) {
  const res = await fetch(`${API_BASE}/trades`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(trade),
  });
  return res.json();
}

export async function fetchConfig() {
  const res = await fetch(`${API_BASE}/config`);
  return res.json();
}

export async function updateConfig(newConfig) {
  const res = await fetch(`${API_BASE}/config`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newConfig),
  });
  return res.json();
}

// Add auth endpoints if needed
