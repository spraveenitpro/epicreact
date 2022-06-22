import { useState } from 'react'
const Login = () => {
    const [error, setError] = useState(false)
    return (
        <div className="container">
            <form action="">
                <input type="text" placeholder="username" value="" />
                <input type="password" placeholder="password" value="" />
                <button disabled="true">Login</button>
                <span
                    data-testid="error"
                    style={{ visibility: error ? 'visible' : 'hidden' }}
                >
                    Something went wrong!
                </span>
            </form>
        </div>
    )
}

export default Login
