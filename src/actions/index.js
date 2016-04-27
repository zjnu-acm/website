/**
 * Created by kevin on 16-4-8.
 */
import * as types from '../constants/ActionTypes';
import * as user from './user';
import * as dialog from './dialog';
import * as contest from './contest';
import {request} from '../utils';

import {tabs} from '../constants';
import {browserHistory} from 'react-router';

export const {userLogout, userLogin, userRegister} = user;
export const {openDialog, closeDialog} = dialog;
export const {getContestList,getContestDetail} = contest;

export function tabSwitch(dest) {
    //TODO 分离切换标签与路由
    const tab = tabs[dest];
    if (typeof tab !== 'undefined') {
        browserHistory.push('/' + tab)
    }
    return {
        type: types.TAB_SWITCH,
        tab
    }
}

//problems
export function getProblemList(desc = {page: 0, size: 30, filter: {}}) {
    return (dispatch, getState)=> {
        request({
            url: 'problems',
            query: Object.assign({
                page: desc.page||0,
                size: desc.size||30,
            }, desc.filter||{})
        }).then((res)=> {
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
            dispatch({type: types.CHANGE_PROBLEM, problem: res});
        }).catch(err=> {
            logger('getProblemDetail', err);
            dispatch(openDialog('hint', 'Something is wrong! you can Retry or Go Back'))
        })
    }
}
export function submitCode(problemId, language, code) {
    return (dispatch, getState)=> {
        request({
            url: 'problems/' + problemId + '/submit',
            body: {
                language,
                code
            },
            method: 'POST'
        }).then(res=> {
            dispatch(tabSwitch('status'));
        }).catch(err=> {
            dispatch(openDialog('hint', 'something is wrong!'));
        })
    }
}

export function getStatusList(desc = {page: 0, size: 30, filter: {}}) {
    logger('getStatusList',desc);
    return (dispatch, getState)=> {
        request({
            url: 'submissions',
            query: Object.assign({
                page: desc.page||0,
                size: desc.size||30,
            }, desc.filter||{})
        }).then(res=> {
            console.log(Object.assign({}, desc, res));
            dispatch({
                type: types.CHANGE_SUBMISSION_LIST,
                submissions: Object.assign({}, desc, res)
            })
        }).catch(error=> {
            dispatch(openDialog('hint', 'Something is wrong! you can Retry or Go Back'));
            logger('getProblemList', error);
        })
    }
}

export function getStatusDetail(submissionId){
    return (dispatch,getState)=>{
        request({url:'submissions/'+submissionId}).then(res=>{
            dispatch({type:types.CHANGE_SUBMISSION,submission:res});
        }).catch(err=> {
            logger('getStatusDetail', err);
            dispatch(openDialog('hint', 'Something is wrong! you can Retry or Go Back'))
        })
    }
}