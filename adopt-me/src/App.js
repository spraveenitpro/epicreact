import React from 'react'
import ReactDOM from 'react-dom'
import SearchParams from './SearchParams'

function App() {
    return (
        <div>
            <h1>Adoptme</h1>
            <SearchParams />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

