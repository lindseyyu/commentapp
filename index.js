import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './src/App.js'

const init = []

const reducer = (state = init, action) => {
    const copyState = state.slice()
    switch (action.type) {
        case 'ADD_COMMENT':
            const newComment = action.comment
            copyState.push(newComment)
            break;
    }
    return copyState //create new state
}

const redStore = createStore(reducer) //create redux store

ReactDOM.render(
    <Provider store={redStore}>
        <App/>
    </Provider>,
    document.getElementById('react-root')
)
