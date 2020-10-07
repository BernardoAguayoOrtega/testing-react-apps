// form testing
// http://localhost:3000/login

import React from 'react'
import {render, screen} from '@testing-library/react'
import faker from 'faker'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)
  const handleSubmit = jest.fn()
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  render(<Login onSubmit={handleSubmit} />)
  // 🐨 get the username and password fields via `getByLabelText`
  const userName = screen.getByLabelText(/username/i)

  const Password = screen.getByLabelText(/password/i)

  const submitButton = screen.getByRole('button', {name: /submit/i})

  const username = faker.internet.userName()

  const password = faker.internet.password()

  userEvent.type(userName, username)

  userEvent.type(Password, password)

  userEvent.click(submitButton)
  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue

  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password,
  })
})

/*
eslint
  no-unused-vars: "off",
*/
