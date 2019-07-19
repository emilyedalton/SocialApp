import { toastr } from "react-redux-toastr";
import {asyncActionStart, asyncActionFinish, asyncActionError} from '../Async/asyncActions'

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

    export const uploadProfileImage = (file, fileName) =>

    // console.log("working")
    async (dispatch, getState, {getFirebase, getFirestore})=> {
        const firebase = getFirebase()
        const firestore = getFirestore()
        const user = firebase.auth().currentUser
        const path = `${user.uid}/user_images`
        const options = {
            name: fileName
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
    name: fileName,
    url: downloadURL
})
dispatch(asyncActionFinish)
        }catch(error){
            console.log(error)
            dispatch(asyncActionError)
        }
    }