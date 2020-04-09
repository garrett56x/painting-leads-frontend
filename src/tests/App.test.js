import React from 'react';
import { render } from '@testing-library/react';
import App from '../client/containers/App/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Painting Leads/i);
  expect(linkElement).toBeInTheDocument();
});
