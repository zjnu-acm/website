/**
 * Created by kevin on 16-5-1.
 */
import * as types from '../constants/ActionTypes';
const initialState = {
    users: {
        page: 0,
        total: 1,
        size: 30,
        list: [
            // {
            //     rank:0,
            //     userId:'',
            //     nickname:'',
            //     signature:'',
            //     classname:'',
            //     static:{
            //         ac:0,
            //         submit:0
            //     }
            // }
        ]
    },
    user: {
        nickname:'',
        signature:'',
        avatarUrl:'',
        classname:'',
        solved:[]
    }
}

export function users(state = initialState.users, action) {
    switch (action.type) {
        case types.CHANGE_USER_LIST:
            return Object.assign({},state,action.users);
        default:
            return state;
    }
}
export function user(state=initialState.user,action){
    switch(action.type){
        case types.CHANGE_USER:
            return Object.assign({},state,action.user);
        default:
            return state;
    }
}