/**
 * Created by kevin on 16-4-27.
 */
import * as types from '../constants/ActionTypes';
import {request} from '../utils';
import {openDialog} from './dialog';
export function getContestList(desc = {page: 0, size: 30, filter: {}}) {
    return (dispatch, getState)=> {
        request({
            url: 'contests',
            query: Object.assign({
                page: desc.page || 0,
                size: desc.size || 30,
            }, desc.filter || {})
        }).then(res=> {
            dispatch({
                type: types.CHANGE_CONTEST_LIST,
                contests: Object.assign({}, desc, res)
            })
        }).catch(error=> {
            dispatch(openDialog('hint', 'Something is wrong! you can Retry or Go Back'));
            logger('getContestList', error);
        })
    }
}
export function getContestDetail(contestId) {
    return (dispatch, getState)=> {
        request({
            url: 'contests/' + contestId
        }).then(res=> {
            dispatch({
                type: types.CHANGE_CONTEST,
                contest: res
            })
        })
    }
}