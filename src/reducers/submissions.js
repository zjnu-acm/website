/**
 * Created by kevin on 16-4-25.
 */
import * as types from '../constants/ActionTypes';
const initialState = {
    submissions: {
        page: 0,
        total: 1,
        size: 30,
        list: [
            //submission
        ]
    },
    submission: {
        userId: '',
        problemId: '',
        verdictId:0,
        time: '',
        memory: '',
        language: '',
        length:'',
        submitTime: '',
        compileError: ''
    }
}

export function submissions(state = initialState.submissions, action) {
    switch (action.type) {
        case types.CHANGE_SUBMISSION_LIST:
            return Object.assign({},state,action.submissions);
        default:
            return state;
    }
}