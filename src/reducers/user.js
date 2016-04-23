/**
 * Created by kevin on 16-4-8.
 */

import * as types from '../constants/ActionTypes';
import cookie from 'js-cookie';
/*
 user:{
 logged:false,
 username:'',
 avatar:'',
 id:''
 }
 */
function getInitialUser() {
    let user = cookie.get('user');
    try {
        if (typeof user === 'undefined') {
            throw Error('user is undefined');
        }
        user = JSON.parse(user);
        return {
            logged: true,
            avatarUrl: user.avatarUrl,
            nickname: user.nickname,
            userId: user.userId
        }
    } catch (e) {
        return {logged: false, nickname: '', avatarUrl: '', userId: ''}
    }
}

export default function user(state = getInitialUser(), action) {
    switch (action.type) {
        case types.USER_LOGGED_IN:
            return Object.assign({}, state, {
                logged: true,
                nickname: action.nickname,
                avatarUrl: action.avatarUrl,
                userId: action.userId
            });
        case types.USER_LOGGED_OUT:
        case types.USER_LOGIN_FAILED://just reset
            return Object.assign({}, state, {
                logged: false,
                nickname: '',
                avatar: '',
                userId: ''
            });
        default:
            return state;
    }
}

