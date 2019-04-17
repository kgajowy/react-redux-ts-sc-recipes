import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import './index.css'
import {RootState} from './reducers'
import usersReducer from './reducers/users.reducer'
import * as serviceWorker from './serviceWorker'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers<RootState>({
    users: usersReducer
})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
    <Provider store={store}><App/></Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
