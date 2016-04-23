/**
 * Created by kevin on 16-4-8.
 */
import * as types from '../constants/ActionTypes';
import cookie from 'js-cookie';
import {request} from '../utils';


export function openDialog(name, error = '') {
    return {
        type: types.OPEN_DIALOG,
        name,
        error
    }
}

export function closeDialog(name) {
    return {
        type: types.CLOSE_DIALOG,
        name
    }
}


export function userLogout() {
    return (dispatch)=> {
        request({
            url: 'account/logout',
            method: 'PUT'
        }).then(function () {
            dispatch({type: types.USER_LOGGED_OUT});
        }).catch(function (err) {
            logger('action/index', err);
            dispatch({type: types.USER_LOGGED_OUT});
        })
    }
}

export function userLogin(userId, password, remember) {
    //do something to verify user identity
    return (dispatch, getState) => {
        request({
            url: 'account/login/',
            query: {userId, password, remember}
        }).then(function (user) {
            dispatch({
                type: types.USER_LOGGED_IN,
                nickname: user.nickname,
                avatarUrl: user.avatarUrl,
                userId: user.userId
            });
            //如果登陆面板打开,将他关闭
            if (getState().dialogs.login.open) {
                dispatch(closeDialog('login'));
            }
        }).catch(function (res) {
            logger('actions/index', res);
            dispatch({type: types.USER_LOGIN_FAILED})
            if (getState().dialogs.login.open) {
                //显示错误信息
                dispatch(openDialog('login', res.message || res));
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
    try {
        user = JSON.parse(user);
        return {
            type: types.USER_LOGGED_IN,
            avatarUrl: user.avatarUrl,
            nickname: user.nickname,
            userId: user.userId
        }
    } catch (e) {
        logger('action/index:initialize', 'cookies.user is not validated.');
        cookie.remove('user');
        return {type: types.USER_LOGIN_FAILED}
    }
}


export function switchTab(dest) {
    return {
        type: types.SWITCH_TAB,
        dest
    }
}