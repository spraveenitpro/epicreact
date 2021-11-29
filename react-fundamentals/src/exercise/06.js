// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
	const [username, setUsername] = React.useState('')

	const usernameInputRef = React.useRef()
	function handleSubmit(event) {
		event.preventDefault()
		//const value = event.target.elements.usernameInput.value
		//const value = usernameInputRef.current.value
		//console.dir(event.target)
		onSubmitUsername(username)
	}

	function handleChange(event) {
		const {value} = event.target
		//console.log(value)
		//const isValid = value === value.toLowerCase()
		//console.log(isValid)
		//setError(isValid ? null : 'Usernames must be lower Case')
		//event.target.value = value.toLowerCase()
		setUsername(value.toLowerCase())
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="usernameInput">Username:</label>
				<input
					ref={usernameInputRef}
					id="usernameInput"
					type="text"
					onChange={handleChange}
					value={username}
				/>
			</div>
			{/* <div style={{color: 'red'}}>{error}</div> */}
			<button type="submit">Submit</button>
		</form>
	)
}

function App() {
	const onSubmitUsername = username => alert(`You entered: ${username}`)
	return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
