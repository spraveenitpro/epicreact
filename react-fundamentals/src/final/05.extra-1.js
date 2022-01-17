// Styling
// 💯 Create a custom component
// http://localhost:3000/isolated/final/05.extra-1.js

import * as React from 'react'
import '../box-styles.css'

function Box({style, size = '', ...otherProps}) {
    return (
        <div
            className={`box ${size}`}
            style={{fontStyle: 'italic', ...style}}
            {...otherProps}
        />
    )
}

function App() {
    return (
        <div>
            <Box size="box--small" style={{backgroundColor: 'lightblue'}}>
                small lightblue box
            </Box>
            <Box size="box--medium" style={{backgroundColor: 'pink'}}>
                medium pink box
            </Box>
            <Box size="box--large" style={{backgroundColor: 'orange'}}>
                large orange box
            </Box>
            <Box>sizeless box</Box>
        </div>
    )
}

export default App
