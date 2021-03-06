import React from 'react';
import { render, screen } from '@testing-library/react';

import Name from  './Name';
import nameResponse from './__mock__/nameResponse.json';

jest.spyOn(global, "fetch").mockImplementation(() => {
  return Promise.resolve({
    json: () => 
      Promise.resolve(nameResponse)
  })
})

test('it renders my name', async () => {
  render(<Name />)
  const link = await screen.findByText("https://github.com/maryyang")
  const ele = await screen.findByText("Mary Yang")
  screen.debug()
  expect(ele).toBeInTheDocument();
  expect(link).toBeInTheDocument();
})

test('it renders my image', async () => {
  render(<Name />)
  const img = await screen.findByAltText("Minsi Yang")
  expect(img).toBeInTheDocument();
})

