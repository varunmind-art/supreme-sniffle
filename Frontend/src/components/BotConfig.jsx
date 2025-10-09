import React, { useState, useEffect } from 'react';

export default function BotConfig({ config, onSave }) {
  const [form, setForm] = useState(config);

  useEffect(() => { setForm(config); }, [config]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: '#e7f6e7',
        padding: 24,
        borderRadius: 8,
        margin: '24px 0'
      }}
    >
      <h2 style={{ marginTop: 0 }}>Bot Configuration</h2>
      <div>
        <label>
          Risk Level:&nbsp;
          <select name="riskLevel" value={form.riskLevel || ''} onChange={handleChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Max Position:&nbsp;
          <input
            type="number"
            name="maxPosition"
            value={form.maxPosition || ''}
            onChange={handleChange}
            style={{ width: 60 }}
          />
        </label>
      </div>
      <div>
        <label>
          Auto Trade:&nbsp;
          <input
            type="checkbox"
            name="autoTrade"
            checked={!!form.autoTrade}
            onChange={handleChange}
          />
        </label>
      </div>
      <button className="btn btn-primary" type="submit" style={{ marginTop: 8 }}>Save</button>
    </form>
  );
}
