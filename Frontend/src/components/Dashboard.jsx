import React, { useState, useEffect } from 'react';
import AuthPanel from './AuthPanel';
import StatusPanel from './StatusPanel';
import BotConfig from './BotConfig';
import TradeTable from './TradeTable';
import TradeForm from './TradeForm';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [botStatus, setBotStatus] = useState({});
  const [config, setConfig] = useState({});
  const [trades, setTrades] = useState([]);
  const [showTradeForm, setShowTradeForm] = useState(false);

  // Fetch all initial data
  useEffect(() => {
    fetch('/api/bot/status').then(res => res.json()).then(setBotStatus);
    fetch('/api/config').then(res => res.json()).then(setConfig);
    fetch('/api/trades').then(res => res.json()).then(setTrades);
  }, []);

  // Auth handlers
  const handleLogin = (userObj) => setUser(userObj);
  const handleLogout = () => setUser(null);

  // Config save handler
  const handleConfigSave = (newConfig) => {
    fetch('/api/config', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newConfig),
    })
    .then(res => res.json())
    .then(setConfig);
  };

  // Trade add handler
  const handleTradeAdd = (tradeData) => {
    fetch('/api/trades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tradeData),
    })
    .then(res => res.json())
    .then(newTrade => setTrades([...trades, newTrade]));
    setShowTradeForm(false);
  };

  // Bot start/stop
  const handleBotControl = (action) => {
    fetch(`/api/bot/${action}`, { method: 'POST' })
      .then(res => res.json())
      .then(setBotStatus);
  };

  return (
    <div style={{ maxWidth: 1100, margin: '30px auto', fontFamily: 'Roboto, Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#1976d2' }}>Delta BTC Options Bot Dashboard</h1>
      <AuthPanel user={user} onLogin={handleLogin} onLogout={handleLogout} />

      <StatusPanel
        botStatus={botStatus}
        onStart={() => handleBotControl('start')}
        onStop={() => handleBotControl('stop')}
      />

      <BotConfig config={config} onSave={handleConfigSave} />

      <div style={{ margin: '30px 0' }}>
        <button className="btn btn-success" onClick={() => setShowTradeForm(!showTradeForm)}>
          {showTradeForm ? 'Cancel' : 'Place New Trade'}
        </button>
        {showTradeForm && <TradeForm onSubmit={handleTradeAdd} />}
      </div>

      <TradeTable trades={trades} />
    </div>
  );
}
