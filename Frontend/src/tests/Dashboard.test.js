import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

test('renders Dashboard title', () => {
  render(<Dashboard />);
  expect(screen.getByText(/Delta BTC Options Bot Dashboard/i)).toBeInTheDocument();
});
