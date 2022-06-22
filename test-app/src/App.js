import './App.css'
import Login from './Login'

function App() {
    const a = 6
    const b = 9
    return (
        <div className="App">
            <a href="https://Reactjs.org">Learn React</a>
            <h1>Hello World !!</h1>

            <b>List items</b>
            <br />
            <h1 data-testid="mytestid">Praveen</h1>
            <span title="sum">{a + b}</span>
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Cherry</li>
                <li>Kiwi</li>
            </ul>
            <Login />
        </div>
    )
}

export default App
