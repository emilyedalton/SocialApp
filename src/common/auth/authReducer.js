import {LOGIN_USER, SIGN_OUT_USER} from './authConst'
import {createReducer} from '../../common/util/reducerUtil'

const initialState ={
    currentUser:{}
}

export const loginUSer =(state, payload) =>{
return {
...state, 
authenticated: true,
currentUser: payload.cred.email
}

}

export const signOutUser = (state, payaload) =>{

    return {
        ...state, 
        authentciated: false,
        currentUser:{
        }

    }
}

export default createReducer(initialState, {
[LOGIN_USER]: loginUSer,
[SIGN_OUT_USER]: signOutUser

})