import {combineReducers} from 'redux'
import testReducer from '../reducers/testReducer'
import {reducer as FormReducer} from 'redux-form'
import eventReducer from '../components/EventList/eventReducer'
import modalsReducer from '../modals/ModalReducer'
import authReducer from '../common/auth/authReducer'
import asyncReducer from '../components/Async/asyncReducer'

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalsReducer,
    auth: authReducer, 
    async: asyncReducer
})

export default rootReducer;