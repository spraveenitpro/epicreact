/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'
import user from '@testing-library/user-event'

const setup = () =>
    render(<Counter defaultCount={0} description="My Counter" />)

describe('Counter at zero with default incrementer', () => {
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
            beforeEach(async () => {
                await user.click(
                    screen.getByRole('button', { name: 'increment' })
                )
            })
            test('default count is zero and 1 when  + clicked', () => {
                expect(screen.getByText('Current Count: 1')).toBeInTheDocument()
            })
        })
        describe('When - is clicked', () => {
            beforeEach(async () => {
                await user.click(
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

describe('Set the incrementer to 5', () => {
    beforeEach(async () => {
        setup()
        await user.type(screen.getByRole('spinbutton'), '{selectall}5')
    })
    test('Check if the value is 5 when + is clicked', async () => {
        await user.click(screen.getByRole('button', { name: /increment/i }))
        expect(screen.getByText('Current Count: 5')).toBeInTheDocument()
    })

    test('Check if the value is -5 when - is clicked', async () => {
        await user.click(screen.getByRole('button', { name: /decrement/i }))
        expect(screen.getByText('Current Count: -5')).toBeInTheDocument()
    })
})
