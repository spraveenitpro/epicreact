// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import React from 'react'

function useLocalStorageState(
    key,
    defaultValue = '',
    {serialize = JSON.stringify, deserialize = JSON.parse} = {},
) {
    const [state, setState] = React.useState(() => {
        const valueInLocalStorage = window.localStorage.getItem(key)
        if (valueInLocalStorage) {
            return deserialize(valueInLocalStorage)
        }
        return defaultValue
    })

    React.useEffect(() => {
        console.log('Calling useEffect')
        window.localStorage.setItem(key, serialize(state))
    }, [key, serialize, state])
    return [state, setState]
}

function Greeting({initialName = ''}) {
    console.log('Rendering Greeting...')
    const [name, setName] = useLocalStorageState('name', initialName)
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
