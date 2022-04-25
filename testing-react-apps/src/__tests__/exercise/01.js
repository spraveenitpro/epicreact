// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import {act} from 'react-dom/test-utils'
import {createRoot} from 'react-dom/client'
import Counter from '../../components/counter'
import {create} from 'react-test-renderer'

// NOTE: this is a new requirement in React 18
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
// Luckily, it's handled for you by React Testing Library :)
global.IS_REACT_ACT_ENVIRONMENT = true

beforeEach(() => {
  document.body.innerHTML = ''
})

test('counter increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div')
  document.body.append(div)

  // 🐨 append the div to document.body (💰 document.body.append)
  const root = createRoot(div)
  // 🐨 use createRoot to render the <Counter /> to the div
  act(() => root.render(<Counter />))
  console.log(document.body.innerHTML)

  //let buttons = div.querySelectorAll('button')
  const [decrement, increment] = div.querySelectorAll('button')
  const message = div.firstChild.querySelector('div')
  console.log(message.textContent)
  expect(message.textContent).toBe('Current count: 0')
  const incrementClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })

  const decrementClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })
  //act(() => increment.click())
  act(() => increment.dispatchEvent(incrementClickEvent))
  expect(message.textContent).toBe('Current count: 1')
  //act(() => decrement.click())
  act(() => decrement.dispatchEvent(decrementClickEvent))
  expect(message.textContent).toBe('Current count: 0')
  div.remove()
})

/* eslint no-unused-vars:0 */
