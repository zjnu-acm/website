/**
 * Created by kevin on 16-4-8.
 */
import {combineReducers} from 'redux';
import user from './user';
import dialogs from './dialogs';
import currentTab from './currentTab';
import {problems} from './problems';
const rootReducer = combineReducers(Object.assign({
    user,
    currentTab,
    dialogs,
    problems
}));

export default rootReducer;


// initialState
const initialState = {
    currentTab: 'home',
    dialogs: {
        login: {
            open: false,
            error: ''
        },
        register: {
            open: false,
            error: ''
        },
        hint: {
            open: false,
            text: ''
        }
    },
    user: {
        logged: false,
        nickname: '',
        avatarUrl: '',
        userId: ''
    },
    contest: {},
    problems: {
        context: 'all or some contestId',
        query: {
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