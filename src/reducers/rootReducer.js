import {combineReducers} from 'redux'
import testReducer from '../reducers/testReducer'
import {reducer as FormReducer} from 'redux-form'
import {reducer as ToastrReducer} from 'react-redux-toastr'
import eventReducer from '../components/EventList/eventReducer'
import modalsReducer from '../modals/ModalReducer'
import authReducer from '../common/auth/authReducer'
import asyncReducer from '../components/Async/asyncReducer'
import { firebaseReducer } from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalsReducer,
    auth: authReducer, 
    async: asyncReducer,
    toastr: ToastrReducer
})

export default rootReducer;