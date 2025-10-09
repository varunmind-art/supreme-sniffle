import React, { useState } from 'react';

export default function TradeTable({ trades }) {
  const [filter, setFilter] = useState('');
  const [sortKey, setSortKey] = useState('expiry');
  const [sortDir, setSortDir] = useState('asc');

  const filtered = trades.filter(
    t =>
      t.type.toLowerCase().includes(filter.toLowerCase()) ||
      t.status.toLowerCase().includes(filter.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortKey === 'expiry') {
      return sortDir === 'asc'
        ? new Date(a.expiry) - new Date(b.expiry)
        : new Date(b.expiry) - new Date(a.expiry);
    }
    if (sortKey === 'strike') {
      return sortDir === 'asc' ? a.strike - b.strike : b.strike - a.strike;
    }
    return 0;
  });

  return (
    <div>
      <h2>Trades</h2>
      <input
        placeholder="Filter by type/status"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        style={{ marginBottom: 10 }}
      />
      <div>
        <button onClick={() => setSortKey('expiry')}>Sort by Expiry</button>
        <button onClick={() => setSortKey('strike')}>Sort by Strike</button>
        <button onClick={() => setSortDir(d => (d === 'asc' ? 'desc' : 'asc'))}>
          {sortDir === 'asc' ? 'Ascending' : 'Descending'}
        </button>
      </div>
      <table style={{ width: '100%', marginTop: 10, borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Strike</th>
            <th>Expiry</th>
            <th>Premium</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((t, idx) => (
            <tr key={t._id || idx}>
              <td>{idx + 1}</td>
              <td>{t.type}</td>
              <td>{t.strike}</td>
              <td>{t.expiry?.slice(0, 10)}</td>
              <td>{t.premium}</td>
              <td>{t.quantity}</td>
              <td>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
