import * as types from '../constants/ActionTypes';
const initialState = {
    contest: {
        title: '',
        startTime: '',
        duration: '',
        statusId: 0,
        host: {
            userId: '',
            nickname: ''
        },
        attendsCount: 0
    },
    contests: {
        total: 1,
        page: 0,
        size: 30,
        list: [
            // contestId:0,
            // title:'',
            // startTime:'',
            //duration:'',
            // status:'',
            // attendsCount:0
        ]
    },
    cproblems: [
        // {
        //     problemOrder: 0,
        //     title: '',
        //     static: {
        //         ac: 0,
        //         submit: 0
        //     }
        // }
    ],
    csubmissions: {
        page: 0,
        total: 1,
        size: 30,
        list: [
            //submission
        ]
    },
    csubmission: {
        userId: '',
        problemOrder: '',
        verdictId:0,
        time: '',
        memory: '',
        language: '',
        length:'',
        code:'',
        submitTime: '',
        compileError: ''
    }
}
export function contests(state = initialState.contests, action) {
    switch (action.type) {
        case types.CHANGE_CONTEST_LIST:
            return Object.assign({}, state, action.contests);
        default:
            return state;
    }
}
export function contest(state = initialState.contest, action) {
    switch (action.type) {
        case types.CHANGE_CONTEST:
            return Object.assign({}, state, action.contest);
        default:
            return state;
    }
}

export function cproblems(state = initialState.cproblems, action) {
    switch (action.type) {
        case types.CHANGE_CONTEST_PROBLEM_LIST:
            return action.cproblems;
        default:
            return state;
    }
}
