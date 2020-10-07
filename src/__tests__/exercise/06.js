// mocking Browser APIs and modules
// http://localhost:3000/location

import React from 'react'
import {render, screen, act} from '@testing-library/react'
import Location from '../../examples/location'

// 🐨 set window.navigator.geolocation to an object that has a getCurrentPosition mock function

// 💰 I'm going to give you this handy utility function
// it allows you to create a promise that you can resolve/reject on demand.
function deferred() {
  let resolve, reject
  const promise = new Promise((res, rej) => {
    resolve = res
    reject = rej
  })
  return {promise, resolve, reject}
}
// 💰 Here's an example of how you use this:
// const {promise, resolve, reject} = deferred()
// promise.then(() => {/* do something */})
// // do other setup stuff and assert on the pending state
// resolve()
// await promise
// // assert on the resolved state
beforeAll(() => {
  window.navigator.geolocation = {
    getCurrentPosition: jest.fn(),
  }
})

test('displays the users current location', async () => {
  render(<Location />)

  screen.debug()
})

/*
eslint
  no-unused-vars: "off",
*/
