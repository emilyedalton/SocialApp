import {SubmissionError,reset} from 'redux-form'
// import {SIGN_OUT_USER} from './authConst'
import {closeModal} from '../../modals/ModalActions'
import {toastr} from 'react-redux-toastr'


export const login = cred => {

  return async (dispatch, getState,{ getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(cred.email, cred.password);
      dispatch(closeModal());
    } catch (error) {
      console.log(error)
      console.log(this.user.email);
      throw new SubmissionError({
          _error: error.message
      })
    }
  }
};

    export const registerUser = user =>
    async (dispatch, getState, {getFirebase, getFirestore})=>{
        const firebase = getFirebase();
        const firestore = getFirestore();

        try{
            let createdUser = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            console.log(createdUser)
            await createdUser.user.updateProfile({
                displayName:user.displayName
            })
            let newUser ={
                displayName: user.displayName,
                createdAt: firestore.FieldValue.serverTimestamp()
            }
            await firestore.set(`users/${createdUser.user.uid}`, {...newUser})
            dispatch(closeModal());
        }catch (error){
            throw new SubmissionError({
                _error: error.message
            })

        }

    }
    export const updatePassword = (cred) => 
    async (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      const user = firebase.auth().currentUser;
      try {
        await user.updatePassword(cred.newPassword1);
        await dispatch(reset('account'));
        toastr.success('Success', 'Your password has been updated')
      } catch (error) {
        throw new SubmissionError({
          _error: error.message
        })
      }
    }

       

export const resetPassword = cred =>{
  return async (dispatch, getState,{ getFirebase }) => {

const firebase = getFirebase();
try{
  console.log ("I'm the email" , cred.email)
  await firebase
  .auth()
  .sendPasswordResetEmail(cred.email)
  toastr.success('Check your email!', 'Your password has been reset')
} catch (error){
  console.log(error)
  throw new SubmissionError({
    _error: error.message
  })
}

}}
    