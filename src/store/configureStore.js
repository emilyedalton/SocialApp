import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk'

export const configureStore = (preloadedState) => {
const middlewares =[thunk]
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
        module.hot.accept('../reducers/rootReducer.js', () => {
            const newRootReducer = require('../reducers/rootReducer.js').default;
        store.replaceReducer(newRootReducer)
    
    })
    }
}
return store;
}
export default configureStore