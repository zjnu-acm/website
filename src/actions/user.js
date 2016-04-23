/**
 * Created by kevin on 16-4-24.
 */
import * as types from '../constants/ActionTypes';
import {request} from '../utils';
import {openDialog,closeDialog} from './dialog';
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
            dispatch({type: types.USER_LOGIN_FAILED})
            if (getState().dialogs.login.open) {
                //显示错误信息
                dispatch(openDialog('login', res.message || res));
            }
        });
    }
}
export function userRegister(body){
    return (dispatch,getState)=>{
        if(body.avatar === undefined)delete body.avatar;
        dispatch(openDialog('process'));
        setTimeout(function(){
            request({
                url:'account/register/',
                method:'POST',
                body:body,
                upload:true,
            }).then(res=>{
                //注册成功
                dispatch(closeDialog('process'));
                dispatch(closeDialog('register'));
                dispatch(openDialog('hint','Congrations! Register Success!'));
            })
        },2000)

    }
}
