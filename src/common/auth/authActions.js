import {SIGN_OUT_USER, LOGIN_USER} from './authConst'

export const login = (cred) =>{
    return{
        type: LOGIN_USER,
        payload:{
            cred
        }
    }
}

export const logout = () =>{

    return{
        type: SIGN_OUT_USER
    }
}