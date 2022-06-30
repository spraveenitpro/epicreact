import { render, screen, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Joke from './joke'
import JokeGenerator from './JokeGenerator'

async function withFetch() {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const json = await res.json()

    return json
}
// This is the section where we mock `fetch`
const unmockedFetch = global.fetch

beforeAll(() => {
    global.fetch = () =>
        Promise.resolve({
            json: () => Promise.resolve('bla bla bla'),
        })
})

afterAll(() => {
    global.fetch = unmockedFetch
})

test('Joke component receives props and renders text', () => {
    render(<Joke text="funniest joke this year" />)
    expect(screen.getByTestId('joke-text')).toHaveTextContent(
        /funniest joke this year/i
    )
})

test('Component fetches random joke and renders it', () => {
    render(<JokeGenerator />)

    fireEvent.click(screen.getByText(/Load joke/i))
    console.log('testing')
    expect(screen.getByText('Loading...')).toBeInTheDocument()
})

test('Is the correct mocked value being returned', async () => {
    const json = await withFetch()
    expect(json).toBe('bla bla bla')
})
