/**
 * Created by kevin on 16-5-1.
 */
import * as types from '../constants/ActionTypes';

//切换tab
export function switchTab(tab, name = 'head') {
    return {
        type: types.TAB_SWITCH,
        tab,
        name
    }
}