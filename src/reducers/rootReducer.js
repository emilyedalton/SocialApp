import {combineReducers} from 'redux'
import testReducer from '../reducers/testReducer'
import eventReducer from '../components/EventList/eventReducer'

const rootReducer = combineReducers({
    test: testReducer,
    events: eventReducer
})

export default rootReducer;