/**
 * Created by kevin on 16-4-24.
 */
import * as types from '../constants/ActionTypes';

const initialState = {
    problems: {
        total: 1,
        page: 0,
        size: 30,
        list: [],
        filter: {
            // title:''
        }
    },
    problem: {
        problemId: 0,
        title: '',
        tags: [],
        timelimit: {java: 0, others: 0},
        memorylimit: {java: 0, others: 0},
        description: '',
        input: '',
        output: '',
        sampleInput: '',
        sampleOutput: '',
        hint: '',
        source: '',
        static: {
            ac: 0,
            submit: 0
        }
    }
}
export function problems(state = initialState.problems, action) {
    switch (action.type) {
        case types.CHANGE_PROBLEM_LIST:
            return Object.assign({}, state, action.problems)
        default :
            return state;
    }
}
export function problem(state = initialState.problem, action) {
    switch (action.type) {
        case types.CHANGE_PROBLEM:
            return Object.assign({}, state, action.problem);
        default:
            return state;
    }
}