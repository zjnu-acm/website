/**
 * Created by kevin on 16-4-24.
 */
import * as types from '../constants/ActionTypes';
export function openDialog(name, error = '') {
    return {
        type: types.OPEN_DIALOG,
        name,
        error
    }
}

export function closeDialog(name) {
    return {
        type: types.CLOSE_DIALOG,
        name
    }
}
