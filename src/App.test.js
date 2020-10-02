import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import nameResponse from './__mock__/nameResponse.json';
import ReposResponse from './__mock__/ReposResponse.json';

jest.spyOn(global, "fetch").mockImplementation(() => {
  return Promise.resolve({
    json: () => 
      Promise.resolve(nameResponse)
  })
})

jest.spyOn(global, 'fetch').mockImplementation(() => {
  return Promise.resolve({
    json: () => 
    Promise.resolve(ReposResponse)
  })
})

test('renders my name', async () => {
  const { findByText } = render(<App />);
  const ele = await findByText(/mary yang/i);
  expect(ele).toBeInTheDocument();
});

test('it renders the list of the repos', async () => {
  render(<App />)
  const project1 = await screen.findByText("React-todolist")
  expect(project1).toBeInTheDocument();
})