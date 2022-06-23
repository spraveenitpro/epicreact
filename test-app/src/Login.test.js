import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Login from './Login'

jest.mock('axios', () => ({
    __esModule: true,
    default: {
        get: () => ({
            data: { id: 1, name: 'John' },
        }),
    },
}))

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

test('Username field should change', () => {
    render(<Login />)
    const usernameInput = screen.getByPlaceholderText(/username/i)
    const testValue = 'test'

    fireEvent.change(usernameInput, { target: { value: testValue } })
    expect(usernameInput.value).toBe(testValue)
})

test('Password field should change', () => {
    render(<Login />)
    const passwordInput = screen.getByPlaceholderText(/password/i)
    const testValue = 'test'
    fireEvent.change(passwordInput, { target: { value: testValue } })
    expect(passwordInput.value).toBe(testValue)
})

test('Button should not be disabled when inputs exist', () => {
    render(<Login />)
    const buttonEl = screen.getByRole('button')
    const usernameInput = screen.getByPlaceholderText(/username/i)
    const passwordInput = screen.getByPlaceholderText(/password/i)
    const testValue = 'test'

    fireEvent.change(usernameInput, { target: { value: testValue } })
    fireEvent.change(passwordInput, { target: { value: testValue } })

    expect(buttonEl).not.toBeDisabled()
})

test('Loading should  be rendered when clicking', () => {
    render(<Login />)
    const buttonEl = screen.getByRole('button')
    const usernameInput = screen.getByPlaceholderText(/username/i)
    const passwordInput = screen.getByPlaceholderText(/password/i)
    const testValue = 'test'

    fireEvent.change(usernameInput, { target: { value: testValue } })
    fireEvent.change(passwordInput, { target: { value: testValue } })
    fireEvent.click(buttonEl)

    expect(buttonEl).toHaveTextContent(/please wait/i)
})

test('Loading should not  be rendered after fetching', async () => {
    render(<Login />)
    const buttonEl = screen.getByRole('button')
    const usernameInput = screen.getByPlaceholderText(/username/i)
    const passwordInput = screen.getByPlaceholderText(/password/i)
    const testValue = 'test'

    fireEvent.change(usernameInput, { target: { value: testValue } })
    fireEvent.change(passwordInput, { target: { value: testValue } })
    fireEvent.click(buttonEl)

    await waitFor(() => expect(buttonEl).not.toHaveTextContent(/please wait/i))
})
