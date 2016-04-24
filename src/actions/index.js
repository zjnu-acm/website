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
export function getProblemList(context = 'all', size = 50, page = 0, filter = []) {
    return (dispatch, getState)=> {
        const query = Object.assign({size, page}, ...filter);
        request({
            url: 'problems',
            query: query
        }).then((res)=> {
            dispatch({
                type: types.CHANGE_PROBLEM_LIST,
                problems: {
                    context: context,
                    query: {page, size},
                    list: res
                }
            })
        })
    }
}