import {LOGIN_USER, SIGN_OUT_USER} from './authConst'
import {createReducer} from '../../common/util/reducerUtil'

const initialState ={
    currentUser:{}
}

export const loginUser =(state, payload) =>{
return {
...state, 
authenticated: true,
currentUser: payload.cred.email
}

}

export const signOutUser = (state, payload) =>{

    return {
        ...state, 
        authentciated: false,
        currentUser:{
        }

    }
}

export const resetPassword = (state, payload) =>{
    return {
        ...state, 
        authenticated: true,
        currentUser: payload.cred.email
        }
}
export default createReducer(initialState, {
[LOGIN_USER]: loginUser,
[SIGN_OUT_USER]: signOutUser
})