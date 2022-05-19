/* global React ReactDOM */
const Pet = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal),
        React.createElement('h2', {}, props.breed),
    ])
}

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, 'Adopt Me!'),
        React.createElement(Pet, {
            name: 'luna',
            animal: 'Dog',
            breed: 'Havanese',
        }),
        React.createElement(Pet, {
            name: 'Bunny',
            animal: 'Dog',
            breed: 'Siamese',
        }),
        React.createElement(Pet, {
            name: 'jony',
            animal: 'Dog',
            breed: 'pomeranian',
        }),
    ])
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
