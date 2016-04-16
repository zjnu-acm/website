/**
 * Created by kevin on 16-4-16.
 */
import * as types from '../constants/ActionTypes';
export default function loginDialog(state = {open: false, errorMessage: ''}, action) {
    switch (action.type) {
        case types.OPEN_LOGIN_DIALOG:
            return Object.assign({}, state, {open: true,errorMessage:action.errorMessage});
        case types.CLOSE_LOGIN_DIALOG:
            return Object.assign({}, state, {open: false, errorMessage: ''});
        default:
            return state
    }
}


export function getErrorMessage(state){
    return state.errorMessage;
}