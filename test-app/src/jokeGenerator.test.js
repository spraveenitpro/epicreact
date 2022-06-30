import { render, screen, fireEvent } from '@testing-library/react'
import Joke from './joke'
import JokeGenerator from './JokeGenerator'
global.fetch = jest.fn(() => {
    Promise.resolve({
        json: () =>
            Promise.resolve({
                value: 'funniest',
            }),
    })
})
beforeEach(() => {
    fetch.mockClear()
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

test('fetch test async joke api', async () => {
    const { getByText } = render(<JokeGenerator />)

    expect(getByText(/funniest/i)).toBeInTheDocument()
  
})
