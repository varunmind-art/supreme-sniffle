import React from "react";

const trades = [
  {
    id: 1,
    type: "Call",
    strike: 28000,
    expiry: "2025-10-15",
    premium: 0.12,
    quantity: 2,
    status: "Open",
  },
  {
    id: 2,
    type: "Put",
    strike: 26000,
    expiry: "2025-10-12",
    premium: 0.18,
    quantity: 1,
    status: "Closed",
  },
];

const TradeTable = () => (
  <div className="trade-table">
    <h2>Trades</h2>
    <table>
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
        {trades.map((trade) => (
          <tr key={trade.id}>
            <td>{trade.id}</td>
            <td>{trade.type}</td>
            <td>{trade.strike}</td>
            <td>{trade.expiry}</td>
            <td>{trade.premium}</td>
            <td>{trade.quantity}</td>
            <td>{trade.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TradeTable;
