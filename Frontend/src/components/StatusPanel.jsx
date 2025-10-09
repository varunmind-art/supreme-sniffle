import React from 'react';

export default function StatusPanel({ botStatus, onStart, onStop }) {
  return (
    <div style={{
      background: '#f0f8ff',
      padding: '18px 24px',
      margin: '24px 0',
      borderRadius: 6,
      boxShadow: '0 2px 8px #eee'
    }}>
      <h2 style={{ marginTop: 0 }}>Bot Status & Overview</h2>
      <div>
        <strong>BTC Price:</strong> {botStatus.btcPrice || '--'} &nbsp;|&nbsp;
        <strong>Delta Exposure:</strong> {botStatus.deltaExposure || '--'} &nbsp;|&nbsp;
        <strong>PnL:</strong> {botStatus.pnl || '--'} &nbsp;|&nbsp;
        <strong>Status:</strong> <span style={{ color: botStatus.running ? 'green' : 'red' }}>{botStatus.running ? 'Running' : 'Stopped'}</span>
        &nbsp;|&nbsp;
        <button className="btn btn-primary" style={{ marginRight: 10 }} onClick={onStart} disabled={botStatus.running}>Start Bot</button>
        <button className="btn btn-danger" onClick={onStop} disabled={!botStatus.running}>Stop Bot</button>
      </div>
    </div>
  );
}
