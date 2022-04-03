# Learning React

Documenting my learning journey through [Epic React](https://epicreact.dev/) to learn React JS

## Day 1

-   Completed React Fundamentals via https://github.com/spraveenitpro/epicreact/tree/main/react-fundamentals/src/exercise

## Day 2

-   Completed React useState Hook via https://github.com/spraveenitpro/epicreact/tree/main/react-hooks
-   Completed React useEffect Hook via https://github.com/spraveenitpro/epicreact/tree/main/react-hooks
-   Completed React useRef Hook via https://github.com/spraveenitpro/epicreact/tree/main/react-hooks

## Day 3

-   Started Building a Keystone project - The bookshelf to practice what I have learnt.
-   Rendering a component on the page/ getting something on the page:

```
ReactDOM.render(<div>Hello World</div>, document.getElementById('root'))
```

-   Importing components

```
import {Logo} from './components/logo'
```

-   Using useState Hook

```
const [openModal, setOpenModal] = React.useState('none')
```

-   Clicking a button to set state

```
<button onClick={() => {
                        setOpenModal('login')
                       }
                }>
                    Login
                </button>

```

-   Form Component with Submit handler

```
function LoginForm({onSubmit, buttonText}) {

    function handlesubmit(event) {
        event.preventDefault()
        const {username} = event.target.elements
        onSubmit({
            username: username.value
        })
    }
    return() {
        <form onSubmit={handlesubmit}>
            <div>
            <label htmlFor="username"> Username: </label>
            <input id="username" type="text">
            </div>

            <div>
            <button type="Submit">{buttonText}</button>
            </div>
        </form>
    }
}
```

-   Invoking LoginForm component

```
<LoginForm onSubmit={login} buttonText="Login" />

```

-   Function for onSubmit

```
function login(formData) {
    console.log('login', formData)
}
```

## Day 4

-   Adding Styles to components via emotion.sh

## Day 5

-   Make HTTP requests to a backend API

## Day 6

-   Wrote an article on learning experiments: https://praveen.blog/2022/01/01/getting-started-with-learning-experiments/

## Day 7

-   Revisiting basics
-   Programmatically interacting with the DOM elements using JavaScript

```
<html>
    <body></body>
    <script type="module">
        let rootElement = document.createElement('div')
        rootElement.setAttribute('id', 'root')
        document.body.append(rootElement)

        let element = document.createElement('div')
        element.textContent = 'Hello World'
        element.className = 'container'
        rootElement.appendChild(element)
    </script>
</html>
```

## Day 8

We need two JavaScript files to write React applications for
the web:

-   React: responsible for creating React elements (kinda like
    `document.createElement()`)
-   ReactDOM: responsible for rendering React elements to the DOM (kinda like
    `rootElement.append()`)
-   Using the 2 files to interact with the API

```
<body>
    <div id="root"></div>

    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>

    <script type="module">
        const rootElement = document.getElementById('root')
        const elementType = 'div'
        const elementProps = {children: 'Hello World', className: 'container'}
        const reactElement = React.createElement(elementType, elementProps)
        ReactDOM.render(reactElement, rootElement)
    </script>
</body>
```

-   With Nested children:

```
<body>
    <div id="root"></div>

    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>

    <script type="module">
        const rootElement = document.getElementById('root')
        const element = React.createElement('div', {
            //children: 'Hello World',
            className: 'container',
            children: [
                React.createElement('span', null, 'Hello'),
                ' ',
                React.createElement('span', null, 'World!'),
            ],
        })

        ReactDOM.render(element, rootElement)
    </script>
</body>
```

-   JSX is more intuitive than the raw React API and is easier to understand when
    reading the code. It's fairly simple HTML-like syntactic sugar on top of the raw
    React APIs

```jsx
const ui = <h1 id="greeting">Hey there</h1>;

// ↓ ↓ ↓ ↓ compiles to ↓ ↓ ↓ ↓

const ui = React.createElement("h1", { id: "greeting", children: "Hey there" });
```

-   JSX example

```
<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>
    <script type="text/babel">
        const element = <div className="container">Hello World</div>
        ReactDOM.render(element, document.getElementById('root'))
    </script>
</body>
```

-   Spread operator

```
<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>
    <script type="text/babel">
        const className = 'container'
        const children = 'Hello World'
        const props = {className, children}
        const element = <div {...props} />
        ReactDOM.render(element, document.getElementById('root'))
    </script>
</body>
```
## Day 9

-   PropTypes

```
function Message({subject, greeting}) {
            return (
                <div className="message">
                    {greeting} {subject}
                </div>
            )
        }

        Message.propTypes = {
            subject: PropTypes.string.isRequired,
            greeting: PropTypes.string.isRequired,
        }
        const element = (
            <>
                <Message greeting="Hello" subject="world" />
                <Message greeting="goodbye" subject="world" />
            </>
        )
        
```

## Day 10

- Worked on WP calypso repository

## Day 11

- Worked on WP calypso repository   

## Day 12

- Worked on a React Material UI component https://d.pr/i/ibUjwm 

## Day 13

- Studied Finite fields in mathematics

## Day 14

- Handling Styling & Form Data in React:

```
function UsernameForm({onSubmitUsername}) {
    function handleSubmit(event) {
        event.preventDefault()
        onSubmitUsername(event.target.elements.usernameInput.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="usernameInput">Username:</label>
                <input id="usernameInput" type="text" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

function App() {
    const onSubmitUsername = username => alert(`You entered: ${username}`)
    return <UsernameForm onSubmitUsername={onSubmitUsername} />
}
```

-   With useRef:

```
function UsernameForm({onSubmitUsername}) {
    const usernameInputRef = React.useRef()
    function handleSubmit(event) {
        event.preventDefault()
        onSubmitUsername(usernameInputRef.current.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="usernameInput">Username:</label>
                <input id="usernameInput" type="text" ref={usernameInputRef} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
```

## Day 15

- Provide key value for rendering group of items/array


```
  <li key={item.id}>
                        <button onClick={() => removeItem(item)}>remove</button>{' '}
                        <label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
                        <input
                            id={`${item.id}-input`}
                            defaultValue={item.value}
                        />
```

- useState Hook

React.useState is a function that accepts a single argument. That argument is the initial state for the instance of the component.  

React.useState returns a pair of values. It does this by returning an array with two elements (and we use destructuring syntax to assign each of those values to distinct variables). The first of the pair is the state value and the second is a function we can call to update the state. We can name these variables whatever we want. Common convention is to choose a name for the state variable, then prefix set in front of that for the updater function.

```
const [count, setCount] = React.useState(0)
```

- useEffect Hook

`React.useEffect` is a built-in hook that allows you to run some custom code
after React renders (and re-renders) your component to the DOM. It accepts a
callback function which React will call after the DOM has been updated:

```javascript
React.useEffect(() => {
  // your side-effect code here.
  // this is where you can make HTTP requests or interact with browser APIs.
})
```

- Lazy initialization to avoid expensive computation

const [name, setName] = React.useState(
        () => window.localStorage.getItem('name') ?? initialName,
)

- Custom Hook 

```
function useLocalStorageState(key, defaultValue = '') {
    const [state, setState] = React.useState(
        () => window.localStorage.getItem(key) || defaultValue,
    )

    React.useEffect(() => {
        window.localStorage.setItem(key, state)
    }, [key, state])

    return [state, setState]
}
```

- Learning experiment https://tictactictac.surge.sh/

## Day 16:

- Setup JEST unit testing for rock paper scissors

## Day 17:

- Practiced Bookshelf App - Rendering the scaffold

## Day 18:

- Styling the React Bookshelf App with @Emotion

## Day 19:

- React Hooks - useReducer

## Day 20:

- CS50 week 8 JS

## Day 21:

- Memoization, UseCallback

## Day 22:

- Refreshed useEffect and useState