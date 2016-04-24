/**
 * Created by kevin on 16-4-24.
 */
import * as types from '../constants/ActionTypes';
const example = {
    problems: {
        context: 'all or some contestId',
        query: {
            tot:10,
            size: 30,
            page: 0,
            //other filter
            problemId: [2, 3, 4]
        },
        list: [{
            problemId: 0,
            title: '',
            tags: [],
            difficulty: 'easy',
            static: {
                ac: 0,
                submit: 0
            },
            date: (new Date()).toLocaleTimeString()
        }]
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
        source: '',
        static: {
            ac: 0,
            submit: 0
        }
    }
}
const initialState = {
    problems: {
        context: 'all',
        query: {
            totPage:10,
            page: 0,
            size: 30
        },
        list: []
    }
}

export function problems(state = initialState.problems, action) {
    switch (action.type) {
        case types.CHANGE_PROBLEM_LIST:
            return Object.assign({}, state, action.problems);
        default:
            return state;
    }
}