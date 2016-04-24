/**
 * Created by kevin on 16-4-24.
 */
import * as types from '../constants/ActionTypes';

initGroup = {
    total:1,
    page:0,
    size:30,
    list:[]
}
const initialState = {
    problems: {
        all: {
            total: 10,
            page: 0,
            size: 30,
            list: []
        }
    }
}

export function problems(state = initialState.problems, action) {
    if (state.hasOwnProperty(action.name)) {
        return Object.assign({}, state, {[action.name]: problemGroup(state[action.name], action)});
    } else return state;
}

function problemGroup(state,action){
    switch(action.type){
        case types.CHANGE_PROBLEM_LIST:
            return Object.assign({},state,action.problemSet)
    }
}