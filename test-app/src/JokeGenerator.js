import React, { useState, useEffect } from 'react'

function JokeGenerator() {
    const [joke, setJoke] = useState('')
    const [loading, setLoading] = useState(false)
    const loadJoke = (e) => {
        e.preventDefault()
        setLoading(true)
        getJoke()
    }

    function getJoke() {
        fetch('https://api.chucknorris.io/jokes/random')
            .then((res) => res.json())
            .then((data) => setJoke(data.value))
            .finally(() => setLoading(false))
    }
    return (
        <>
            {!joke && <div>You have not loaded any joke yet</div>}
            {loading && <div>Loading...</div>}
            <button onClick={loadJoke}>Load a random joke</button>
            {joke && <div>{joke}</div>}
        </>
    )
}

export default JokeGenerator
