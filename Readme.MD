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
