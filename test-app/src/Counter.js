import React, { useState } from 'react'

export function Counter({ defaultCount = 0, description = 'My Counter' }) {
    const [count, setCount] = useState(defaultCount)
    const [incrementer, setIncrementer] = useState(1)
    return (
        <>
            <h3>{description}</h3>
            <label htmlFor="incrementer">
                Incrementer
                <input
                    type="number"
                    name="incrementer"
                    value={incrementer}
                    onChange={(event) =>
                        setIncrementer(parseInt(event.target.value) || 0)
                    }
                />
            </label>
            <button
                aria-label="increment"
                onClick={() => {
                    setCount(count + incrementer)
                }}
            >
                +
            </button>
            <button
                aria-label="decrement"
                onClick={() => {
                    setCount(count - incrementer)
                }}
            >
                -
            </button>

            <h3>Current Count: {count}</h3>
        </>
    )
}
