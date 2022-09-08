import React from 'react'

import '@testing-library/jest-dom/extend-expect';
import { userEvent } from "@testing-library/user-event";
import {getByText, render,screen} from '@testing-library/react'
import { MemoryRouter, fireEvent, getByTestId } from 'react-router-dom';

import { createMemoryHistory } from 'history';
import Crud from './Crud';

it("When data is added",()=>{
    render(
      <MemoryRouter initialEntries={["/Crud"]}>
      <Crud />
    </MemoryRouter>
    )
   
    const res = screen.getByText(/Students - List/)
    expect(res).toBeInTheDocument()
})


it("test input field",()=>{
    render(
        <MemoryRouter initialEntries={["/Crud"]}>
        <Crud />
      </MemoryRouter>
    )
    const inp = screen.getByPlaceholderText('✋ Write Student First Name')
    console.log(inp)
    expect(inp).toBeInTheDocument()
})

it("Second Input Testing",()=>{
    render(
      <MemoryRouter initialEntries={["/Crud"]}>
        <Crud />
      </MemoryRouter>
    )
    const inp2 = screen.getByPlaceholderText("✋ Write Student Mobile No.")
    expect(inp2).toBeInTheDocument()
})

//ERROR HOOK TESTING
it("Initial State Is Null",()=>{
  const {container} = render(
    <MemoryRouter initialEntries={["/Crud"]}>
      <Crud />
    </MemoryRouter>
  )

  const error = container.querySelector('p')
  console.log(error)
  expect(error).toBe(null);
  // expect(inp2).toBeInTheDocument()
})

it("Initial State Is Null",async()=>{
  const {container} = render(
    <MemoryRouter initialEntries={["/Crud"]}>
      <Crud />
    </MemoryRouter>
  )

  const error = container.querySelector('p')
  const button = getByText(container,"Add")
  // console.log(button)
  await fireEvent.click(button);
  console.log(error)
  // expect(error).toBe(null);
  // expect(inp2).toBeInTheDocument()
})
