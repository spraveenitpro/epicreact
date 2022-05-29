import React from 'react'
import ReactDOM from 'react-dom'
import Pet from './Pet'

function App() {
    return (
        <div>
            <h1>Adoptme</h1>
            <Pet name="Luna" animal="dog" breed="Havenese" />
            <Pet name="Pepper" animal="Cat" breed="Bengal" />
            <Pet name="Sandy" animal="Fish" breed="Koi" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
