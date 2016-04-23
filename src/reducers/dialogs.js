/**
 * Created by kevin on 16-4-16.
 */
import * as types from '../constants/ActionTypes';

const initialState = {
    login: {
        open: false,
        error: ''
    },
    register: {
        open: false,
        error: ''
    },
    hint: {
        open: false,
        error: ''
    },
    process:{
        open:false,
        erro:''
    }
    //...
}

export default function dialogs(state = initialState, action) {
    if (state.hasOwnProperty(action.name)) {//如果有这个名字的dialog
        return Object.assign({}, state, {[action.name]: dialog(state[action.name], action)});
    } else return state;
}

function dialog(state = initialState.login, action) {
    switch (action.type) {
        case types.OPEN_DIALOG:
            return Object.assign({}, state, {open: true, error: action.error});
        case types.CLOSE_DIALOG:
            return Object.assign({}, state, {open: false, error: ''});
        default:
            return state
    }
}
