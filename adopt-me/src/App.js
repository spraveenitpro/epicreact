import React from 'react'
import ReactDOM from 'react-dom'
import Pet from './Pet'



const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Luna" animal="Dog" Breed="Havanese" />
            <Pet name="Digo" animal="Dog" Breed="Havanese" />
            <Pet name="Star" animal="Dog" Breed="Havanese" />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))
