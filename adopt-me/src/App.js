import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import SearchParams from './SearchParams'
import { StrictMode } from 'react'

import Details from './Details'

function App() {
    return (
        <StrictMode>
            <BrowserRouter>
                <header>
                    <Link to="/">Adopt me</Link>
                </header>
                <Routes>
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/" element={<SearchParams />} />
                </Routes>
            </BrowserRouter>
        </StrictMode>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
