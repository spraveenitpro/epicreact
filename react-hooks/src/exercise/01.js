// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import React, {useState} from 'react'

function Greeting({defaultName = ''}) {
    const [name, setName] = useState(defaultName)

    function handleChange(event) {
        setName(event.target.value)
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input value={name} onChange={handleChange} id="name" />
            </form>
            {name ? <strong>Hello {name}</strong> : 'Please type your name'}
        </div>
    )
}

function App() {
    return <Greeting defaultName="Raju" />
}

export default App
