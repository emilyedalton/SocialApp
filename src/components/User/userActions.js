import { toastr } from "react-redux-toastr";
import {asyncActionStart, asyncActionFinish, asyncActionError} from '../Async/asyncActions'
import firebase from '../../config/firebase'
import cuid from 'cuid'
import { FETCH_EVENT } from "../EventList/eventConstants";

export const updateProfile = (user) =>
    async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        const {isLoaded, isEmpty, ...updatedUser} = user;
        try {
            await firebase.updateProfile(updatedUser);
            toastr.success('SUCCESS')
        } catch (error) {
            console.log(error)
        }
    }

    export const uploadProfileImage = (file, fileName ) =>

    // console.log("working")
    async (dispatch, getState, {getFirebase, getFirestore})=> {
        const imageName = cuid();
        const firebase = getFirebase()
        const firestore = getFirestore()
        const user = firebase.auth().currentUser
        const path = `${user.uid}/user_images`
        const options = {
            name: imageName

        };
        try{ dispatch(asyncActionStart())
//upload the file to firebase 
let uploadedFile = await firebase.uploadFile(path, file, null, options )
//get url of image
let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL()
//get user doc
let userDoc = await firestore.get(`users/${user.uid}`)
console.log(user.uid)
//check if the user currently has a photo, if they don't then update the profile with the new image 

if (!userDoc.data().photoURL){
await firebase.updateProfile({

    photoURL: downloadURL
})
console.log(downloadURL)
await user.updateProfile({
    photoURL: downloadURL
})
}

// add the image to firestore 
await firestore.add({
    collection: 'users',
    doc: user.uid,
    subcollections: [{collection: 'photos'}]
}, {
    name: imageName,
    url: downloadURL
})
dispatch(asyncActionFinish)
        }catch(error){
            console.log(error)
            dispatch(asyncActionError)
        }
    }

    export const deletePhoto = (photo) =>
        async (dispatch, getState, {getFirebase, getFirestore}) => {
            const firebase = getFirebase()
            const firestore = getFirestore()
            const user = firebase.auth().currentUser
            try{
                await firebase.deleteFile(`${user.uid}/user_images/${photo.name}`)
                await firestore.delete({
                    collection: 'users',
                    doc: user.uid,
                    subcollections: [{collection: 'photos', doc: photo.id}]

                })

            } catch(error){
                console.log(error)
                throw new Error("Problem Deleting")
            }

        }

        export const setMainPhoto = (photo)=>
        async(dispatch, getState,{getFirebase}) => {
        const firebase = getFirebase();
            try {
                return await firebase.updateProfile({

                    photoURL: photo.url
                })
            }catch (error){
                console.log(error)
                throw new Error ('problem settin main photo')
            }
    
        }

        export const attend = (event)=>
        async(dispatch, getState,{getFirebase, getFirestore})=>{
            const firestore = getFirestore();
            const firebase = getFirebase(); 
            const user = firebase.auth().currentUser;
            const profile = getState().firebase.profile;
            const attendee = {
                going: true,
                photoURL: profile.photoURL,
                displayName: profile.displayName
            }
            try {
                await firestore.update(`events/${event.id}`,{
                    [`attendees.${user.uid}`]: attendee
                }) 
                await firestore.set(`event_attendee/${event.id}_${user.uid}`,{
                    eventId: event.id,
                    userUid: user.uid
            
                })
            }  catch(error){
                console.log(error)
                toastr.error("error")
            }

        }

//         export const getAuthorTitles = (userUid) =>
//             async (dispatch, getState) => {
//                 dispatch(asyncActionStart())
//                 const firestore = firebase.firestore();
//                 let eventsRef = firestore.collection('event_attendee');
//                 let query = eventsRef.where('host', '==', true).where('userUid', '==', userUid)
            
//                 try
//                 {
// let querySnap = await query.get()
// let titles = [];
// for (let i = 0; i < querySnap.docs.length; i++){
//     let tlt = await firestore.collection('events').doc(querySnap.docs[i].data().eventId).get()
//     titles.push({...tlt.data(), id: tlt.id})

// console.log(titles)
// }}
// // dispatch({type: FETCH_EVENT, payload: {titles}})

// // dispatch (asyncActionFinish())
//                 catch(error){
//                     console.log(error)
//                     dispatch(asyncActionFinish())

//                 }
//             }
        
export const getAuthorTitles = (userUid, activeTab) => async (
    dispatch,
    getState
  ) => {
    dispatch(asyncActionStart());
    const firestore = firebase.firestore();
    // const today = new Date();
    let eventsRef = firestore.collection('event_attendee');
    let query;
    switch (activeTab)
     {
      case 1: // past events
      query = eventsRef
      .where('userUid', '==', userUid)
      .where('host', '==', true)
      .where('going', '==' , true)
        break;
    //   case 2: // future events
    //     query = eventsRef
    //       .where('userUid', '==', userUid)
    //     //   .where('eventDate', '>=', today)
    //       .orderBy('eventDate');
    //     break;
    //   case 3: // hosted events
    //     query = eventsRef
    //       .where('userUid', '==', userUid)
    //       .where('host', '==', true)
    //     //   .orderBy('eventDate', 'desc');
    //     break;
      default:
        query = eventsRef
          .where('userUid', '==', userUid)
        //   .orderBy('eventDate', 'desc');
        break;
    }
  
    try {
      let querySnap = await query.get();
      let event = [];
  
      for (let i = 0; i < querySnap.docs.length; i++) {
        let evt = await firestore
          .collection('events')
          .doc(querySnap.docs[i].data().eventId)
          .get();
        event.push({ ...evt.data(), id: evt.id });
          console.log(event)

      }
      dispatch({ type: FETCH_EVENT, payload: {event} });
  
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  };