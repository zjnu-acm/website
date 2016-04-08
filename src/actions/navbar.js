/**
 * Created by kevin on 16-4-8.
 */
import * as types from '../constants/ActionTypes';

export function openLoginDialog() {
    return {
        type: types.OPEN_LOGIN_DIALOG
    }
}
export function closeLoginDialog() {
    return {
        type: types.CLOSE_LOGIN_DIALOG
    }
}