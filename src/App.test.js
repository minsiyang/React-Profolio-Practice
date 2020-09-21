import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import nameResponse from './__mock__/nameResponse.json';

jest.spyOn(global, "fetch").mockImplementation(() => {
  return Promise.resolve({
    json: () => 
      Promise.resolve(nameResponse)
  })
})

test('renders my name', async () => {
  const { findByText } = render(<App />);
  const ele = await findByText(/mary yang/i);
  expect(ele).toBeInTheDocument();
});
