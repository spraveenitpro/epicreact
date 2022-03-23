import './App.css'
import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)
    return (
        <div className="App">
            <p>The count is {count} </p>
            <div className="buttons">
                <button onClick={() => setCount(count + 1)}>Add 1</button>
                <button onClick={() => setCount(count - 1)}>Decrease 1</button>
                <button onClick={() => setCount(count + 10)}>Add 10</button>
                <button onClick={() => setCount(count - 10)}>
                    Decrease 10
                </button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default App
