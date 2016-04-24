/**
 * Created by kevin on 16-4-24.
 */
import * as types from '../constants/ActionTypes';

const initialState = {
    context: 'all',
    total: 1,
    page: 0,
    size: 30,
    list: [],
    filter:{
       // title:''
    }
}


export function problems(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_PROBLEM_LIST:
            return Object.assign({}, state, action.problems)
        default :
            return state;
    }
}