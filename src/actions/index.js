/**
 * Created by kevin on 16-4-8.
 */
import * as types from '../constants/ActionTypes';
import * as user from './user';
import * as dialog from './dialog';
import {request} from '../utils';

export const {userLogout, userLogin, userRegister} = user;
export const {openDialog, closeDialog} = dialog;


export function tabSwitch(dest) {
    return {
        type: types.TAB_SWITCH,
        dest
    }
}

//problem
export function getProblemList(context = 'all') {
    return (dispatch, getState)=> {
        const state = getState();
        const problems = state.problems[context];
        let query = {page:0,size:30}
        if(typeof problems === 'object'){
            //query = Object.assign({})
        }
        request({
            url: 'problems',
            query: query
        }).then((res)=> {
            dispatch({
                type: types.CHANGE_PROBLEM_LIST,
                problemSet: {
                    query: {page, size,total:res.total},
                    list: res.list
                }
            })
        })
    }
}