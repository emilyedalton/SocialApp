import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'
import rootReducer from '../reducers/rootReducer'

export const configureStore = (preloadedState) => {
const middlewares =[]
const middlewareEnhancer = applyMiddleware(...middlewares)

const storeEnhancers =[middlewareEnhancer]
const composedEnhanceer = compose(...storeEnhancers)

const store = createStore(
rootReducer, 
preloadedState,
composedEnhanceer

)
return store;
}
export default configureStore