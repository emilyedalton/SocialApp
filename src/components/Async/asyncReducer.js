import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR } from "./asyncConstants";
import { asyncActionStart } from "./asyncActions";
import {createReducer} from '../../common/util/reducerUtil'

const initialState = {
    loading: false,
    elementName:null
}

const asyncActionStarted = (state, payload) => {
    return {
        ...state,
        loading: true,
        elementName: payload
    }
}

const asyncActionFinished = (state) => {
    return {
        ...state,
        loading: false,
        elementName: null

    }
}

const asyncActionError = (state) => {
    return {
        ...state,
        loading: false,
        elementName: null    }
}

export default createReducer(initialState,{
[ASYNC_ACTION_START]: asyncActionStart,
[ASYNC_ACTION_FINISH]: asyncActionFinished,
[ASYNC_ACTION_ERROR] : asyncActionError
}) 