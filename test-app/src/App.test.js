import { render, screen } from '@testing-library/react'
import App from './App'

describe('Our Application test suite', () => {
    test('render the learn react link', () => {
        render(<App />)
        const linkElement = screen.getByText(/Learn React/i)
        expect(linkElement).toBeInTheDocument()
    })

    test('render 3 list items', () => {
        render(<App />)
        const listItems = screen.getAllByRole('listitem')
        expect(listItems.length).toBe(4)
    })

    test('Check span value', () => {
        render(<App />)
        const spanElement = screen.getByTitle('sum')
        expect(spanElement.textContent).toBe('15')
    })

    test('Check H1 value', () => {
        render(<App />)
        const h1Element = screen.getByTestId('mytestid')
        expect(h1Element).toHaveTextContent('Praveen')
    })
    test('Check if the title tag has wordpress.com string', () => {
        const { container } = render(<App />)
        expect(container.querySelector('title')).toHaveTextContent(
            /wordPress.com/i
        )
    })
})
