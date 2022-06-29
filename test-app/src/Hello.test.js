import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Hello from './Hello'

test('First Hello world test', () => {
    const { container } = render(<Hello />)
    //console.log(container)
    expect(container).toHaveTextContent(/Hello World/i)
})
