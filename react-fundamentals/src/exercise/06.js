// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useState} from 'react'

function UsernameForm({onSubmitUsername}) {
    const [username, setUsername] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        onSubmitUsername(username)
    }

    function handleChange(event) {
        setUsername(event.target.value.toLowerCase())
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="usernameInput">Username:</label>
                <input
                    id="usernameInput"
                    type="text"
                    value={username}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

function App() {
    const onSubmitUsername = username => alert(`You entered: ${username}`)
    return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
