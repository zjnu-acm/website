/**
 * Created by kevin on 16-4-8.
 */
import * as types from '../constants/ActionTypes';
import cookie from 'js-cookie';
import {request} from '../utils';

export function openLoginDialog(error = '') {
    return {
        type: types.OPEN_LOGIN_DIALOG,
        error: error
    }
}

export function closeLoginDialog() {
    return {
        type: types.CLOSE_LOGIN_DIALOG
    }
}

export function userLogin(username, password) {
    //do something to verify user identity
    return (dispatch, getState) => {
        request({
            url: 'account/login/',
            query: {username, password}
        }).then(function (user) {
            const state = getState();
            if ('errorCode' in user) {
                dispatch({type: types.USER_LOGIN_FAILED})
                if (state.loginDialog.open) {
                    //显示错误信息
                    dispatch({
                        type: types.OPEN_LOGIN_DIALOG,
                        error: user.message
                    });
                }
            } else {
                //加入cookie
                cookie.set('token', user.token);
                cookie.set('user', {
                    nickname: user.nickname,
                    avatarUrl: user.avatarUrl,
                    userId: user.userId
                });
                dispatch({
                    type: types.USER_LOGGED_IN,
                    nickname: user.nickname,
                    avatarUrl: user.avatarUrl,
                    userId: user.userId
                });
                //如果登陆面板打开,将他关闭
                if (state.loginDialog.open) {
                    dispatch({type: types.CLOSE_LOGIN_DIALOG});
                }
            }
        });
    }
}

//从cookie中获取数据
export function initialize() {
    let user = cookie.get('user');
    if (typeof user === 'undefined') {
        return {type: types.USER_LOGIN_FAILED}
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