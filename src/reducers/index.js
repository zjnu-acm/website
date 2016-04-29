/**
 * Created by kevin on 16-4-8.
 */
import {combineReducers} from 'redux';
import user from './user';
import dialogs from './dialogs';
import navTab from './navTab';
import {problems, problem} from './problems';
import {submissions,submission} from './submissions';
import {contests,contest,cproblems,csubmission,csubmissions} from './contests';
const rootReducer = combineReducers(Object.assign({
    user,
    navTab,
    dialogs,
    problems,
    problem,
    submissions,
    submission,
    contests,
    contest,
    cproblems,
    csubmission,
    csubmissions
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
        context: 'all',
        total: 1,
        page: 0,
        size: 30,
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
        sampleInput: '',
        sampleOutput: '',
        hint: '',
        source: '',
        static: {
            ac: 0,
            submit: 0
        }
    },
    submissions: {}

}