import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

test('fetches words and updates state on button click', async () => {
  const mockWords = {
    data: { words: [{ spanish: 'hola', english: 'hello' }] },
  };
  fetch.mockResponseOnce(JSON.stringify(mockWords));

  render(<App />);

  const button = screen.getByText('Learn Sea Creatures');
  fireEvent.click(button);

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(expect.any(String), expect.any(Object));
});

test('renders learn sea creatures button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/learn sea creatures/i);
  expect(buttonElement).toBeInTheDocument();
});
