import React, { useEffect, useState } from 'react'

function JokeGenerator() {
    const [joke, setJoke] = useState('')
    const [loading, setLoading] = useState(false)
    const loadJoke = (e) => {
        e.preventDefault()
        setLoading(true)
        getJoke()
        console.log(joke)
    }
    useEffect(() => {
        getJoke()
    }, [])

    async function getJoke() {
        try {
            const result = await fetch(
                'https://api.chucknorris.io/jokes/random'
            )
            const data = await result.json()
            setJoke(data.value)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            {!joke && <div>You have not loaded any joke yet</div>}
            {loading && <div>Loading...</div>}
            <button onClick={loadJoke}>Load joke</button>
            {joke && <div>{joke}</div>}
        </>
    )
}

export default JokeGenerator
