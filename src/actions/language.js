/**
 * Created by kevin on 16-5-1.
 */
import {request} from '../utils';
import {openDialog} from './dialog';
import * as types from '../constants/ActionTypes';
export function getLanguageList(contestId = 'all') {
    return (dispatch, getState)=> {
        let url = 'languages';
        if (contestId !== 'all')url = `contests/${contestId}/` + url;
        request({url}).then(res=> {
            dispatch({
                type: types.CHANGE_LANGUAGE_LIST,
                languages: {
                    [contestId]: res
                }
            })
        }).catch(error=> {
            dispatch(openDialog('hint', 'Something is wrong! you can Retry or Go Back'));
            logger(error);
        });
    }
}