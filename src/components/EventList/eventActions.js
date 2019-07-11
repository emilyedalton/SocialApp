import {CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT, FETCH_EVENT} from './eventConstants'
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../Async/asyncActions';
import {fetchSampleData} from "../../data/mockapi"
import {toastr} from 'react-redux-toastr'

export const createEvent = (event) => {
    return async dispatch =>{
        try{
dispatch({
    type: CREATE_EVENT,
    payload:{
        event
    }
    })
    toastr.success('Success', 'event has been created')
} catch (error){
    toastr.error('oops', 'something went wrong')
    }
}
};
export const updateEvent = (event) => {
    return async dispatch =>{
        try{
dispatch({
    type: UPDATE_EVENT,
    payload:{
        event
    }
    })
    toastr.success('Success', 'event has been updated')
} catch (error){
    toastr.error('oops', 'something went wrong')
    }
}
};
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