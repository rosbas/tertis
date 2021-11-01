import {createStore, applyMiddleware,compose} from 'redux'
import {createWrapper} from 'next-redux-wrapper' //next js exclusive
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

//object action => function
const middleware = [thunk]

//enabled redux dev tools
// const composedEnhancer = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
// const composedEnhancer = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// from official
const composedEnhancer = composeWithDevTools(
    // EXAMPLE: Add whatever middleware you actually want to use here
    applyMiddleware(...middleware)
    // other store enhancers if any
)

const makeStore = () => createStore(rootReducer,composedEnhancer)

export const wrapper = createWrapper(makeStore)