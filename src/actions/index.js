/**
 * Created by kevin on 16-4-8.
 */
import * as types from '../constants/ActionTypes';
import * as user from './user';
import * as dialog from './dialog';
import {request} from '../utils';

import {tabs} from '../constants';
import {browserHistory} from 'react-router';

export const {userLogout, userLogin, userRegister} = user;
export const {openDialog, closeDialog} = dialog;
export function tabSwitch(dest) {
    const tab = tabs[dest];
    if (typeof tab !== 'undefined') {
        browserHistory.push('/' + tab)
    }
    return {
        type:types.TAB_SWITCH,
        tab
    }
}
//problems
export function getProblemList(desc = {}) {
    return (dispatch, getState)=> {
        const info = getState().problems;
        if ((typeof desc.context !== 'undefined') && desc.context != info.context) {
            //切换列表（竞赛a的题目列表切换到竞赛b的题目列表）
            //TODO 保存之前状态到cookie
            //初始化
            desc.page = desc.page || 0;
            desc.size = desc.size || 30;
            desc.filter = desc.filter || {};
        } else for (let key in info) {
            desc[key] = (typeof desc[key] !== 'undefined') ? desc[key] : info[key];
        }
        let query = Object.assign({
            page: desc.page,
            size: desc.size,
        }, desc.filter);
        request({url: 'problems', query}).then((res)=> {
            dispatch({
                type: types.CHANGE_PROBLEM_LIST,
                problems: Object.assign({}, desc, res)
            })
        }).catch(error=> {
            dispatch(openDialog('hint', 'Something is wrong! you can Retry or Go Back'));
            logger('getProblemList', error);
        })
    }
}
export function getProblemDetail(problemId = 0) {
    return (dispatch, getState)=> {
        const url = 'problems/' + problemId;
        request({url}).then((res)=> {
            dispatch({type:types.CHANGE_PROBLEM, problem:res});
        }).catch(err=> {
            logger('getProblemDetail', err);
            dispatch(openDialog('hint','Something is wrong! you can Retry or Go Back'))
        })
    }
}
export function submitCode(problemId,language,code){
    return (dispatch,getState)=>{
        request({
            url:'problems/'+problemId+'/submit',
            body:{
                language,
                code
            },
            method:'POST'
        }).then(res=>{
            dispatch(tabSwitch('status'));
        }).catch(err=>{
            dispatch(openDialog('hint','something is wrong!'));
        })
    }
}