// testing with context and a custom render method
// http://localhost:3000/easy-button

import React from 'react'
import {render, screen} from '@testing-library/react'
import {ThemeProvider} from '../../components/theme'
import EasyButton from '../../components/easy-button'

function renderWithTheme({theme = 'light'} = {}) {
  const Wrapper = ({children}) => (
    <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
  )

  render(<EasyButton>Easy</EasyButton>, {wrapper: Wrapper})
}

test('renders with the light styles for the light theme', () => {
  renderWithTheme()

  const button = screen.getByRole('button', {name: /easy/i})

  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `)

  // 🐨 update the `render` call above to use the wrapper option using the
  // ThemeProvider
})

/* eslint no-unused-vars:0 */
