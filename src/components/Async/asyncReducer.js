import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR } from "./asyncConstants";
import { asyncActionStart } from "./asyncActions";
import {createReducer} from '../../common/util/reducerUtil'

const initialState = {
    loading: false
}

const asyncActionStarted = (state) => {
    return {
        ...state,
        loading: true
    }
}

const asyncActionFinished = (state) => {
    return {
        ...state,
        loading: false
    }
}

const asyncActionError = (state) => {
    return {
        ...state,
        loading: false
    }
}

export default createReducer(initialState,{
[ASYNC_ACTION_START]: asyncActionStart,
[ASYNC_ACTION_FINISH]: asyncActionFinished,
[ASYNC_ACTION_ERROR] : asyncActionError
}) 