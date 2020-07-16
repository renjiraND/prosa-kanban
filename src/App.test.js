import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('prosa frontend', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/prosa frontend/i);
  expect(linkElement).toBeInTheDocument();
});
