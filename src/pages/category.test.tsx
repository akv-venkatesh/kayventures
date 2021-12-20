import React from 'react';
import { render, screen } from '@testing-library/react';
import Category from './Category';

test('renders next link', () => {
  render(<Category />);
  const linkElement = screen.getByText(/Choose business category/i);
  expect(screen.getByRole('heading')).toHaveTextContent('Next');
});
