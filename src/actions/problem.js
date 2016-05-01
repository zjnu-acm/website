/**
 * Created by kevin on 16-5-1.
 */
import {request} from '../utils';
import * as types from '../constants/ActionTypes';
import {openDialog} from './dialog';
import {browserHistory} from 'react-router';
import {switchTab} from './tab';

export function getProblemList(desc = {page: 0, size: 30, filter: {}}) {
    return (dispatch, getState)=> {
        request({
            url: 'problems',
            query: Object.assign({
                page: desc.page || 0,
                size: desc.size || 30,
            }, desc.filter || {})
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
            browserHistory.push(`/status`);
            dispatch(switchTab('status'));
        }).catch(err=> {
            dispatch(openDialog('hint', 'something is wrong!'));
        })
    }
}