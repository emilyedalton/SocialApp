import {CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT, FETCH_EVENT} from './eventConstants'
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../Async/asyncActions';
import {fetchSampleData} from "../../data/mockapi"

export const createEvent = (event) => {
return {
    type: CREATE_EVENT,
    payload:{
        event
    }
}

}
export const updateEvent = (event) => {
    return {
        type: UPDATE_EVENT,
        payload:{
            event
        }
    }
}

export const deleteEvent = (eventID) => {
    return {
        type: DELETE_EVENT,
        payload:{
            eventID
        }
    }
}

export const fetchEvent = (events) => {
    return {
        type: FETCH_EVENT,
        payload: events
    }
}

export const loadEvent = () => {
    return async dispatch => {
        try {
            dispatch(asyncActionStart())
            let events = await fetchSampleData();
            dispatch(fetchEvent(events))
            dispatch(asyncActionFinish())
        } catch (error) {
            console.log(error);
            dispatch(asyncActionError())
        }
    }
}