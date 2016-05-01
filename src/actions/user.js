/**
 * Created by kevin on 16-5-1.
 */
import * as types from '../constants/ActionTypes';
import {request} from '../utils';
import {openDialog} from './dialog';
export function getUserList(desc = {page: 0, size: 30, filter: {}}) {
    return dispatch=> {
        request({
            url: `users`,
            query: Object.assign({
                page: desc.page || 0,
                size: desc.size || 30,
            }, desc.filter || {})
        }).then(res=>{
            dispatch({
                type:types.CHANGE_USER_LIST,
                users:Object.assign({},desc,res)
            })
        }).catch(error=>{
            dispatch(openDialog('hint', 'Something is wrong! you can Retry or Go Back'));
            logger(error);
        })
    }
}
export function getUserDetail(userId){
    return dispatch=>{
        request({url:`users/${userId}`}).then(res=>{
            dispatch({
                type:types.CHANGE_USER,
                user:res
            })
        }).catch(error=>{
            dispatch(openDialog('hint', 'Something is wrong! you can Retry or Go Back'));
            logger(error);
        })
    }
}