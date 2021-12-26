// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {ErrorBoundary} from 'react-error-boundary'

// 🐨 you'll want the following additional things from '../pokemon':
// fetchPokemon: the function we call to get the pokemon info
// PokemonInfoFallback: the thing we show while we're loading the pokemon info
// PokemonDataView: the stuff we use to display the pokemon info
import {
    PokemonForm,
    PokemonInfoFallback,
    PokemonDataView,
    fetchPokemon,
} from '../pokemon'

function PokemonInfo({pokemonName}) {
    // 🐨 Have state for the pokemon (null)

    const [state, setState] = React.useState({
        status: pokemonName ? 'pending' : 'idle',
        pokemon: null,
        error: null,
    })

    const {status, pokemon, error} = state
    console.log(state)

    React.useEffect(() => {
        if (!pokemonName) {
            return
        }
        setState({status: 'pending'})
        fetchPokemon(pokemonName).then(
            pokemon => {
                setState({pokemon, status: 'resolved'})
            },
            error => {
                setState({error, status: 'rejected'})
            },
        )
    }, [pokemonName])

    if (status === 'idle') {
        return 'Submit a pokemon'
    } else if (status === 'pending') {
        return <PokemonInfoFallback />
    } else if (status === 'rejected') {
        //Handled by Error Boundary
        throw error
    } else if (status === 'resolved') {
        return <PokemonDataView pokemon={pokemon} />
    }
    throw new Error('This should be impossible')
}

function ErrorFallback({error, resetErrorBoundary}) {
    return (
        <div>
            There was an error:{' '}
            <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
            <button onClick={resetErrorBoundary}> Try Again</button>
        </div>
    )
}

function App() {
    const [pokemonName, setPokemonName] = React.useState('')

    function handleSubmit(newPokemonName) {
        setPokemonName(newPokemonName)
    }
    function handleReset() {
        setPokemonName('')
    }

    return (
        <div className="pokemon-info-app">
            <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
            <hr />
            <div className="pokemon-info">
                <ErrorBoundary
                    key={pokemonName}
                    FallbackComponent={ErrorFallback}
                    onReset={handleReset}
                >
                    <PokemonInfo pokemonName={pokemonName} />
                </ErrorBoundary>
            </div>
        </div>
    )
}

export default App
