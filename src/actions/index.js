/**
 * Created by kevin on 16-4-8.
 */
import * as types from '../constants/ActionTypes';

export function openLoginDialog() {
    return {
        type: types.OPEN_LOGIN_DIALOG,
        errorMessage:''
    }
}

export function closeLoginDialog() {
    return {
        type: types.CLOSE_LOGIN_DIALOG
    }
}

export function userLogin(username,password){
    console.log(username,password);
    //do something to verify user identity
    return {
        type:types.USER_LOGGED_IN,
        username,
        logged:true,
        avatar:'A',
        id:0
    }
}