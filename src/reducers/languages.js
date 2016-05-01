/**
 * Created by kevin on 16-5-1.
 */
import * as types from '../constants/ActionTypes';
export function languages(state = {}, action) {
    switch (action.type) {
        case types.CHANGE_LANGUAGE_LIST:
            return Object.assign({}, state, action.languages);
        default:
            return state;
    }
}