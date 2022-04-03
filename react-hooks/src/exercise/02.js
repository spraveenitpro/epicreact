import * as React from 'react'

function useLocalStorage(key, defaultValue) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = React.useState(
        // eslint-disable-next-line no-undef
        () => window.localStorage.getItem(key) || defaultValue,
    )

    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
        window.localStorage.setItem(key, state)
    }, [key, state])

    return [state, setState]
}

function Greeting({initialName = ''}) {
    const [name, setName] = useLocalStorage(initialName)
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
    return <Greeting />
}

export default App
