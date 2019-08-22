import {FETCH_EVENT} from './eventConstants'
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../Async/asyncActions';
import {fetchSampleData} from "../../data/mockapi"
import {toastr} from 'react-redux-toastr'
import firebase from '../../config/firebase'
import {createNewEvent} from '../../common/util/helpers'

export const createEvent = (event) => {
    return async (dispatch, getState, {getFirestore, getFirebase}) =>{
        const firestore = getFirestore()
        const firebase= getFirebase()
        const user = firebase.auth().currentUser
        const photoURL = getState().firebase.profile.photoURL;
        const newEvent = createNewEvent(user, photoURL, event)
        try{
        let createdEvent = await firestore.add('events', newEvent)
        await firestore.set(`event_attendee/${createdEvent.id}_${user.uid}`, {
        eventId: createdEvent.id,
        userUid: user.uid,
        host: true
      });
    toastr.success('Success', 'event has been created')
    return createdEvent
} catch (error){
    console.log("error from eventActions File" + error)
    toastr.error('oops', 'something went wrong')
}
};
};

export const updateEvent = (event) => {
    return async (dispatch, getState, {getFirestore} )=>{
        const firestore = getFirestore()
        try{
await firestore.update(`events/${event.id}`, event)
    toastr.success('Success', 'event has been updated')
} catch (error){
    toastr.error('oops', 'something went wrong')
    }
}
};
export const deleteEvent = (event) => {
    return async (dispatch, getState, {getFirestore} )=>{
        const firestore = getFirestore()
        try{
await firestore.remove(`events/${event.id}`)
    toastr.success('Success', 'event has been updated')
} catch (error){
    toastr.error('oops', 'something went wrong')
    }
}
};

export const fetchEvents = event => ({
  
        type: FETCH_EVENT,
        payload: {event}
    
})

export const loadEvent = () => {
    return async dispatch => {
        try {
            dispatch(asyncActionStart())
            let event = await fetchSampleData();
            dispatch(fetchEvents(event))
            dispatch(asyncActionFinish())
        } catch (error) {
            console.log(error);
            dispatch(asyncActionError())
        }
    }
}
export const getAllEvents = () => 
async (dispatch, getState) => {
    const firestore = firebase.firestore();
    const eventsRef = firestore.collection('events')
    try {
        dispatch(asyncActionStart())
        let startAfter =  await firestore.collection('events')
        .get()
        let query;
    
        query = eventsRef
        .orderBy("created",  "desc")
        let event = []
    
        let querySnap = await query.get()
    
        if (querySnap.docs.length === 0){
            dispatch(asyncActionFinish())
            return querySnap;
        }
    
        for (let i=0; i < querySnap.docs.length; i++){
            let evt = {...querySnap.docs[i].data(), id: querySnap.docs[i].id}
            event.push(evt)
        }
        dispatch({type: FETCH_EVENT, payload: {event}})
        dispatch(asyncActionFinish())
        return event;
    } catch(error){
        console.log(error)
        dispatch(asyncActionError())
    }}


export const sortByAuthor = (lastEvent) =>
async (dispatch, getState) => {
    const firestore = firebase.firestore();
    const eventsRef = firestore.collection('events')

try {
    dispatch(asyncActionStart())
    let startAfter = lastEvent && await firestore.collection('events')
    .doc(lastEvent.id)
    .get()
    let query;

    query = eventsRef
 
    .orderBy("lastName")
    let event = []

    let querySnap = await query.get()

    if (querySnap.docs.length === 0){
        dispatch(asyncActionFinish())
        return querySnap;
    }

    for (let i=0; i < querySnap.docs.length; i++){
        let evt = {...querySnap.docs[i].data(), id: querySnap.docs[i].id}
        event.push(evt)
    }
    dispatch({type: FETCH_EVENT, payload: {event}})
    dispatch(asyncActionFinish())
    return event;
} catch(error){
    console.log(error)
    dispatch(asyncActionError())
}}

export const sortByTitle = (lastEvent) =>
async (dispatch, getState) => {
    const firestore = firebase.firestore();
    const eventsRef = firestore.collection('events')

try {
    dispatch(asyncActionStart())
    let startAfter = lastEvent && await firestore.collection('events')
    .doc(lastEvent.id)
    .get()
    let query;

    query = eventsRef
 
    .orderBy("titleofBook")
    let event = []

    let querySnap = await query.get()

    if (querySnap.docs.length === 0){
        dispatch(asyncActionFinish())
        return querySnap;
    }

    for (let i=0; i < querySnap.docs.length; i++){
        let evt = {...querySnap.docs[i].data(), id: querySnap.docs[i].id}
        event.push(evt)
    }
    dispatch({type: FETCH_EVENT, payload: {event}})
    dispatch(asyncActionFinish())
    return event;
} catch(error){
    console.log(error)
    dispatch(asyncActionError())
}}