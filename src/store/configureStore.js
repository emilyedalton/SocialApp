import { createStore, applyMiddleware } from 'redux';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import firebase from '../config/firebase.js';

const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  useFirestoreForProfile: true
};
export const configureStore = () => {

const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

const composedEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
  );

  const store = createStore(rootReducer, composedEnhancer);


  return store;
}
// import { createStore, applyMiddleware } from 'redux'
// import {reactReduxFirebase, getFirebase, firebase} from 'react-redux-firebase'
// import {reduxFirestore, getFirestore} from 'redux-firestore'
// import {composeWithDevTools} from 'redux-devtools-extension'
// import rootReducer from '../reducers/rootReducer'
// import thunk from 'redux-thunk'

// const rrfConfig ={
//     userProfile: 'users',
//     attachAuthIsReady: true,
//     userFireStoreForProfile:true
// }

// export const configureStore = (preloadedState) => {
// const middlewares =[thunk.withExtraArgument({getFirebase, getFirestore})]

// const middlewareEnhancer = applyMiddleware(...middlewares)

// const storeEnhancers =[middlewareEnhancer]
// const composedEnhanceer = composeWithDevTools(
//     applyMiddleware(...middlewares),
//     reactReduxFirebase(firebase,rrfConfig),
//     reduxFirestore(firebase)
// )

// // const store = createStore(
// // rootReducer, 
// // preloadedState,
// // composedEnhanceer


// // if (process.env.NODE_ENV !== 'production'){
// //     if (module.hot){
// //         module.hot.accept('../reducers/rootReducer.js', () => {
// //             const newRootReducer = require('../reducers/rootReducer.js').default;
// //         store.replaceReducer(newRootReducer)
    
// //     })
// //     }
// const store = createStore(rootReducer, composedEnhanceer)
// return store;
// };
// // export default configureStore