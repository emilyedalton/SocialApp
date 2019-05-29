import {combineReducers} from 'redux'
import testReducer from '../reducers/testReducer'
import {reducer as FormReducer} from 'redux-form'
import eventReducer from '../components/EventList/eventReducer'
import modalsReducer from '../modals/ModalReducer'

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalsReducer
})

export default rootReducer;