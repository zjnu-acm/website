/**
 * Created by kevin on 16-4-8.
 */
import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
export function openLoginDialog() {
    return {
        type: types.OPEN_LOGIN_DIALOG,
        errorMessage: ''
    }
}

export function closeLoginDialog() {
    return {
        type: types.CLOSE_LOGIN_DIALOG
    }
}
function getQueryString(query){
    return Object.keys(query)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(query[key]))
        .join("&")
        .replace(/%20/g, "+");
}
export function userLogin(username, password) {
    //do something to verify user identity
    return dispatch =>{
        fetch('/account/login?'+getQueryString({username,password}))
            .then(response => response.json())
            .then(function (user) {
                if(user.status==='success'){
                    dispatch({
                        type:types.USER_LOGGED_IN,
                        nickname:user.data.nickname,
                        avatarUrl:user.data.avatarUrl,
                        userId:user.data.userId,
                    });
                }else{
                    dispatch({
                        type:types.USER_LOGIN_FAILED,
                        error:user.data.error
                    })
                }
            })
    }
}
//从cookie中获取数据
export function initialize() {
    let user = cookie.get('user');
    if (typeof user === 'undefined') {
        return {
            type: types.USER_LOGIN_FAILED,
            error: null
        }
    }
    user = JSON.parse(user);
    return {
        type: types.USER_LOGGED_IN,
        avatarUrl: user.avatarUrl,
        nickname: user.nickname,
        userId: user.userId
    }
}


export function switchTab(dest) {
    return {
        type: types.SWITCH_TAB,
        dest
    }
}