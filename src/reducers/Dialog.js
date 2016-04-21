/**
 * Created by kevin on 16-4-16.
 */
import * as types from '../constants/ActionTypes';
export function loginDialog(state = {open: false, error: ''}, action) {
    switch (action.type) {
        case types.OPEN_LOGIN_DIALOG:
            return Object.assign({}, state, {open: true,error:action.error});
        case types.CLOSE_LOGIN_DIALOG:
            return Object.assign({}, state, {open: false, error: ''});
        default:
            return state
    }
}
export function registerDialog(state={open:false,error:''},action){
    switch (action.type) {
        case types.OPEN_REGISTER_DIALOG:
            return Object.assign({}, state, {open: true,error:action.error});
        case types.CLOSE_REGISTER_DIALOG:
            return Object.assign({}, state, {open: false, error: ''});
        default:
            return state
    }
}
