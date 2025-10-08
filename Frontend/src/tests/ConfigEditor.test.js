import React from 'react';
import { render, screen } from '@testing-library/react';
import ConfigEditor from '../components/ConfigEditor';

test('renders Bot Configuration header', () => {
  render(<ConfigEditor />);
  expect(screen.getByText(/Bot Configuration/i)).toBeInTheDocument();
});
