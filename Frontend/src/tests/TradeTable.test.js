import React from 'react';
import { render, screen } from '@testing-library/react';
import TradeTable from '../components/TradeTable';

test('renders Trades header', () => {
  render(<TradeTable />);
  expect(screen.getByText(/Trades/i)).toBeInTheDocument();
});
