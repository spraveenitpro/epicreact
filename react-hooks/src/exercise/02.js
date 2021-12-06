// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import React from 'react'

function Greeting({initialName = ''}) {
    console.log('Rendering Greeting...')

    const [name, setName] = React.useState(
        () => window.localStorage.getItem('name') || initialName,
    )

    React.useEffect(() => {
        console.log('Calling useEffect')
        window.localStorage.setItem('name', name)
    }, [name])

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
    const [count, setCount] = React.useState(0)
    return (
        <>
            <button
                onClick={() => setCount(previousCount => previousCount + 1)}
            >
                {count}
            </button>
            <Greeting initialName="George!" />
        </>
    )
}

export default App
