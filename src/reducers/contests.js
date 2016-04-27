import * as types from '../constants/ActionTypes';
const initialState = {
    contest: {
        contestId: 0,
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
    switch(action.type){
        case types.CHANGE_CONTEST:
            return Object.assign({},state,action.contest);
        default:
            return state;
    }
}