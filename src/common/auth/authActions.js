import {SIGN_OUT_USER} from './authConst'
import {closeModal} from '../../modals/ModalActions'


export const login = cred => {

    return async (dispatch, getState,{ getFirebase }) => {
        const firebase = getFirebase();
        try {
          await firebase
            .auth()
            .signInWithEmailAndPassword(cred.email, cred.password);
          dispatch(closeModal());
        } catch (error) {
          console.log(error);
        }
         }
        }

    // return dispatch => {
    //     dispatch({type: LOGIN_USER, payload:{
    //         cred
    //         }})
    //     dispatch(closeModal())
    // };

export const logout = () =>{

    return{
        type: SIGN_OUT_USER
    }
}