import React, { useState } from 'react';

export default function TradeForm({ onSubmit }) {
  const [form, setForm] = useState({
    type: 'Call',
    strike: '',
    expiry: '',
    premium: '',
    quantity: 1,
    status: 'Open'
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    setForm({ type: 'Call', strike: '', expiry: '', premium: '', quantity: 1, status: 'Open' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ background: '#e3eafc', padding: 18, borderRadius: 8, margin: '18px 0' }}
    >
      <h3>Place New Trade</h3>
      <label>
        Type:&nbsp;
        <select name="type" value={form.type} onChange={handleChange}>
          <option>Call</option>
          <option>Put</option>
        </select>
      </label>
      &nbsp;
      <label>
        Strike:&nbsp;
        <input type="number" name="strike" value={form.strike} onChange={handleChange} required />
      </label>
      &nbsp;
      <label>
        Expiry:&nbsp;
        <input type="date" name="expiry" value={form.expiry} onChange={handleChange} required />
      </label>
      &nbsp;
      <label>
        Premium:&nbsp;
        <input type="number" name="premium" step="0.01" value={form.premium} onChange={handleChange} required />
      </label>
      &nbsp;
      <label>
        Quantity:&nbsp;
        <input type="number" name="quantity" value={form.quantity} min="1" onChange={handleChange} required />
      </label>
      &nbsp;
      <button className="btn btn-success" type="submit">Submit Trade</button>
    </form>
  );
}
