import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Hello from './Hello'

test('First Hello world test', () => {
    render(<Hello />)

    const myElement = screen.queryByText(/hello world/i)
    expect(myElement).toBeInTheDocument()
})
