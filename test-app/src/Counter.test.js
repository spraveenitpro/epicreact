/* eslint-disable testing-library/no-render-in-setup */
import { render, fireEvent, screen } from '@testing-library/react'
import { Counter } from './Counter'
import user from '@testing-library/user-event'

const setup = () =>
    render(<Counter defaultCount={0} description="My Counter" />)

describe('Counter', () => {
    describe('initialized with default count zero and description', () => {
        beforeEach(() => {
            setup()
        })
        test('default count is zero and 1 when clicked', () => {
            expect(screen.getByText('Current Count: 0')).toBeInTheDocument()
        })

        test('Renders the default title', () => {
            expect(screen.getByText(/My Counter/i)).toBeInTheDocument()
        })

        describe('When + is clicked', () => {
            beforeEach(() => {
                fireEvent.click(screen.getByRole('button', { name: 'increment' }))
            })
            test('default count is zero and 1 when  + clicked', () => {
                expect(screen.getByText('Current Count: 1')).toBeInTheDocument()
            })
        })
        describe('When - is clicked', () => {
            beforeEach(() => {
                fireEvent.click(
                    screen.getByRole('button', { name: 'decrement' })
                )
            })

            test('default count is zero and - 1 when -clicked', () => {
                expect(
                    screen.getByText('Current Count: -1')
                ).toBeInTheDocument()
            })
        })
    })
})
