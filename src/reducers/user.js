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

export default function user(state = {logged: false, username: '', avatar: '', id: ''}, action) {
    switch (action.type) {
        case types.USER_LOGGED_IN:
            return Object.assign({}, state, {
                logged: true,
                username: action.username,
                avatar: action.avatar,
                id: action.id
            });
        case types.USER_LOGIN_FAILED:
            return Object.assign({}, state, {
                logged: false,
                username: '',
                avatar: '',
                id: ''
            });
        default:
            return state;
    }
}

