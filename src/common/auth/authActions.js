import {SIGN_OUT_USER, LOGIN_USER} from './authConst'
import {closeModal} from '../../modals/ModalActions'


export const login = (cred) =>{
//     return {
//         type: LOGIN_USER,
//         payload: {
//             cred
//         }
//     }
// }
    return dispatch => {
        dispatch({type: LOGIN_USER, payload: {cred}})
        dispatch(closeModal())
    }
}

export const logout = () =>{

    return{
        type: SIGN_OUT_USER
    }
}