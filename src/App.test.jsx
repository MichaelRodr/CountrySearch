import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).tobe(3);
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/La suma es /i);
  expect(linkElement).toBeInTheDocument();
});
