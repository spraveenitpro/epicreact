import './App.css'
import { useState, useReducer } from 'react'

function App() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="App">
                <p>The count is {count} </p>
                <div className="buttons">
                    <button onClick={() => setCount(count + 1)}>Add 1</button>
                    <button onClick={() => setCount(count - 1)}>
                        Decrease 1
                    </button>
                    <button onClick={() => setCount(count + 10)}>Add 10</button>
                    <button onClick={() => setCount(count - 10)}>
                        Decrease 10
                    </button>
                    <button onClick={() => setCount(0)}>Reset</button>
                </div>
            </div>
            <ReducerExample />
        </>
    )
}

function ReducerExample() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    function reducer(state, action) {
        switch (action.type) {
            case 'ADD':
                return { count: state.count + 1 }
            case 'SUB':
                return { count: state.count - 1 }
            case 'ADD10':
                return { count: state.count + 10 }
            case 'SUB10':
                return { count: state.count - 10 }
            case 'RESET':
                return { count: 0 }
            default:
                return state
        }
    }

    return (
        <div className="reducer">
            <p>Count is {state.count}</p>
            <div className="buttons">
                <button onClick={() => dispatch({ type: 'ADD' })}>Add 1</button>
                <button onClick={() => dispatch({ type: 'SUB' })}>SUB 1</button>
                <button onClick={() => dispatch({ type: 'ADD10' })}>
                    Add 10
                </button>
                <button onClick={() => dispatch({ type: 'SUB10' })}>
                    SUB 10
                </button>
                <button onClick={() => dispatch({ type: 'RESET' })}>
                    RESET
                </button>
            </div>
        </div>
    )
}

export default App
