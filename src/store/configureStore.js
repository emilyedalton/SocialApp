import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from '../components/Test/reducers/rootReducer'

export const configureStore = (preloadedState) => {
const middlewares =[]
const middlewareEnhancer = applyMiddleware(...middlewares)

const storeEnhancers =[middlewareEnhancer]
const composedEnhanceer = composeWithDevTools(...storeEnhancers)

const store = createStore(
rootReducer, 
preloadedState,
composedEnhanceer

);
if (process.env.NODE_ENV !== 'production'){
    if (module.hot){
        module.hot.accept('../components/Test/reducers/rootReducer.js', () => {
            const newRootReducer = require('../components/Test/reducers/rootReducer.js').default;
        store.replaceReducer(newRootReducer)
    
    })
    }
}
return store;
}
export default configureStore