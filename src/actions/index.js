/**
 * Created by kevin on 16-4-8.
 */
import * as types from '../constants/ActionTypes';
import * as user from './user';
import * as dialog from './dialog';

export const {userLogout,userLogin,userRegister} = user;
export const {openDialog,closeDialog} = dialog;


export function tabSwitch(dest) {
    return {
        type: types.TAB_SWITCH,
        dest
    }
}