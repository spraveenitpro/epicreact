import './App.css'
import Login from './Login'
import Hello from './Hello'
import Joke from './joke'
import JokeGenerator from './JokeGenerator'

function App() {
    const a = 6
    const b = 9
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
        </>
    )
}

export default App
