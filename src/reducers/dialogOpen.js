/**
 * Created by kevin on 16-4-8.
 */
import * as types from '../constants/ActionTypes';
export default function (state = false, action) {
    switch (action.type) {
        case types.OPEN_LOGIN_DIALOG:
            return true;
        case types.CLOSE_LOGIN_DIALOG:
            return false;
        default:
            return state
    }
}