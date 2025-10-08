import React from 'react';
import { render, screen } from '@testing-library/react';
import Auth from '../components/Auth';

test('renders Username label', () => {
  render(<Auth />);
  expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
});
