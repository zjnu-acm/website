/**
 * Created by kevin on 16-5-1.
 */
import {request} from '../utils';
import * as types from '../constants/ActionTypes';
import {openDialog} from './dialog';
export function getSubmissionList(desc = {page: 0, size: 30, filter: {}}) {
    return (dispatch, getState)=> {
        request({
            url: 'submissions',
            query: Object.assign({
                page: desc.page || 0,
                size: desc.size || 30,
            }, desc.filter || {})
        }).then(res=> {
            dispatch({
                type: types.CHANGE_SUBMISSION_LIST,
                submissions: Object.assign({}, desc, res)
            })
        }).catch(error=> {
            dispatch(openDialog('hint', 'Something is wrong! you can Retry or Go Back'));
            logger(error);
        })
    }
}

export function getSubmissionDetail(submissionId) {
    return (dispatch, getState)=> {
        request({url: 'submissions/' + submissionId}).then(res=> {
            dispatch({type: types.CHANGE_SUBMISSION, submission: res});
        }).catch(err=> {
            logger(err);
            dispatch(openDialog('hint', 'Something is wrong! you can Retry or Go Back'))
        })
    }
}