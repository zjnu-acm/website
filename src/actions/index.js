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
            logger('getProblemList', error);
        })

    }
}