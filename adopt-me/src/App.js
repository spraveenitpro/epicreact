import React from 'react'
import ReactDOM from 'react-dom'
//import Pet from './Pet'
import SearchParams from './SearchParams'

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            {/*    <Pet name="Luna" animal="Dog" Breed="Havanese" />
            <Pet name="Digo" animal="Dog" Breed="POmeranian" />
            <Pet name="Star" animal="Dog" Breed="Havanese" /> */}
            <SearchParams />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
