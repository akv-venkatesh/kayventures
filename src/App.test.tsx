import React from 'react';
import { render, screen } from '@testing-library/react';
import Catepgory from './pages/Category';

test('renders learn react link', () => {
  render(<Catepgory />);
  const linkElement = screen.getByText(/Next/i);
  expect(linkElement).toHaveTextContent('next/i');
});
