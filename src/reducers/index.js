/**
 * Created by kevin on 16-4-8.
 */
import {combineReducers} from 'redux';
import user from './user';
import * as dialogs from './Dialog';
import currentTab from './currentTab';
const rootReducer = combineReducers(Object.assign({
    user,
    currentTab
},dialogs));

export default rootReducer;


// initialState
const initialState = {
    currentTab: 'home',
    loginDialog: {
        open: false,
        error: ''
    },
    registerDialog: {
        open: false,
        error: ''
    },
    user: {
        logged: false,
        nickname: '',
        avatarUrl: '',
        userId: ''
    }
}