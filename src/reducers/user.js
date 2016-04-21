/**
 * Created by kevin on 16-4-8.
 */

import * as types from '../constants/ActionTypes';
/*
 user:{
 logged:false,
 username:'',
 avatar:'',
 id:''
 }
 */

export default function user(state = {logged: false, nickname: '', avatarUrl: '', userId: ''}, action) {
    switch (action.type) {
        case types.USER_LOGGED_IN:
            return Object.assign({}, state, {
                logged: true,
                nickname: action.nickname,
                avatarUrl: action.avatarUrl,
                userId: action.userId
            });
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

