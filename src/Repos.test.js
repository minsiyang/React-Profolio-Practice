import React from 'react';
import { render, screen } from "@testing-library/react"

import Repos from './Repos';
import ReposResponse from './__mock__/ReposResponse.json';

jest.spyOn(global, 'fetch').mockImplementation(() => {
  return Promise.resolve({
    json: () => 
    Promise.resolve(ReposResponse)
  })
})

test('it renders the list of the repos', async () => {
  render(<Repos />)
  const project1 = await screen.findByText("React-todolist")
  expect(project1).toBeInTheDocument();
})