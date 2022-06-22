import { render, screen } from '@testing-library/react'
import Login from './Login'

test('username input should be rendered', () => {
    render(<Login />)
    const usernameInput = screen.getByPlaceholderText(/username/i)
    expect(usernameInput).toBeInTheDocument()
})

test('Password input should be rendered', () => {
    render(<Login />)
    const passwordInput = screen.getByPlaceholderText(/password/i)
    expect(passwordInput).toBeInTheDocument()
})

test('Button should be rendered', () => {
    render(<Login />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
})

test('Username field should be empty', () => {
    render(<Login />)
    const usernameInput = screen.getByPlaceholderText(/username/i)
    expect(usernameInput.value).toBe('')
})

test('Password field should be empty', () => {
    render(<Login />)
    const passwordInput = screen.getByPlaceholderText(/password/i)
    expect(passwordInput.value).toBe('')
})

test('Check if the button is disabled', () => {
    render(<Login />)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
})

test('Error message should not be visible', () => {
    render(<Login />)
    const errorEl = screen.getByTestId('error')
    expect(errorEl).not.toBeVisible()
})
