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
function getInitialAccount() {
    let account = cookie.get('user');
    try {
        if (typeof account === 'undefined') {
            throw Error('user is undefined');
        }
        account = JSON.parse(account);
        return {
            logged: true,
            avatarUrl: account.avatarUrl,
            nickname: account.nickname,
            userId: account.userId
        }
    } catch (e) {
        return {logged: false, nickname: '', avatarUrl: '', userId: ''}
    }
}

export default function account(state = getInitialAccount(), action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                logged: true,
                nickname: action.nickname,
                avatarUrl: action.avatarUrl,
                userId: action.userId
            });
        case types.LOGOUT:
        case types.LOGIN_FAILED://just reset
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

