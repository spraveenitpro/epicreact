// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({initialName = ''}) {
    const [name, setName] = React.useState(initialName)

    function handleChange(event) {
        // 🐨 update the name here based on event.target.value
        setName(event.target.value)
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input onChange={handleChange} id="name" />
            </form>
            {name ? <strong>Hello {name}</strong> : 'Please type your name'}
        </div>
    )
}

function Counter() {
    const [count, setCount] = React.useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
            <p>{count ? count : 'Please click'}</p>
        </>
    )
}

function App() {
    return (
        <>
            <Greeting initialName="Steve1" />
            <Counter />
        </>
    )
}

export default App
