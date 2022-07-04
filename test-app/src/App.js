import './App.css'

import Hello from './Hello'
import Joke from './joke'
import JokeGenerator from './JokeGenerator'
import Posts from './Posts'
import { randomBetween } from './randomBetween'
import { newforEach } from './newforEach'
function App() {
    const add = (num1) => {
        return num1 * 2
    }
    const numbers = [1, 2, 3, 4, 5]
    const doubledNumbers = numbers.forEach(add)
    return (
        <>
            <title>
                My Home ‹ Praveen Selvasekaran - Developer Apprenticeship —
                WordPress.com
            </title>
            <div className="App">
                <a href="https://Reactjs.org">Learn React</a>
                <h1>Hello World !!</h1>
            </div>
            <Hello />
            <Joke text="funniest joke this year" />
            <JokeGenerator />
            <Posts />
            {randomBetween(1, 10)}
            {doubledNumbers &&
                doubledNumbers.map((number) => {
                    return <li>number</li>
                })}
        </>
    )
}

export default App
