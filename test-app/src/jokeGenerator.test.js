
import { render, screen, fireEvent } from '@testing-library/react'
import Joke from './joke'
import JokeGenerator from './JokeGenerator'

test('Joke component receives props and renders text', () => {
    render(<Joke text="funniest joke this year" />)
    expect(screen.getByTestId('joke-text')).toHaveTextContent(
        /funniest joke this year/i
    )
})

test('Component fetches random joke and renders it', () => {
    render(<JokeGenerator />)
    fireEvent.click(screen.getByText(/Load a random joke/i))
    console.log('testing')
    expect(screen.getByText('Loading...')).toBeInTheDocument()
})
