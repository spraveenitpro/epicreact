import './App.css'

import Hello from './Hello'
import Joke from './joke'
import JokeGenerator from './JokeGenerator'
import Posts from './Posts'

function App() {
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
        </>
    )
}

export default App
