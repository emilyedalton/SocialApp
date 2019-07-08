import {createReducer} from '../../common/util/reducerUtil'
import {CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT, FETCH_EVENT} from './eventConstants'

const initialState = []

  export const createEvent = (state, payload) =>{

    return [...state, Object.assign({}, payload.event)]

  }
  
  export const updateEvent = (state, payload)=> {
    return[
    ...state.filter(event => event.id !== payload.event.id),
    Object.assign({}, payload.event)
    ]
  }

  export const deleteEvent = (state, payload) => {
    return[
    ...state.filter(event => event.id !== payload.eventID),
    Object.assign({}, payload.event)
    ]
  }

  export const fetchEvents = (state, payload ) =>  {
    return payload.event

  }
  export default createReducer(initialState, {
      [CREATE_EVENT]: createEvent,
      [UPDATE_EVENT]: updateEvent,
      [DELETE_EVENT]: deleteEvent,
      [FETCH_EVENT]: fetchEvents


  })