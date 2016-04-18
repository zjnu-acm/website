/**
 * Created by kevin on 16-4-8.
 */
import {combineReducers} from 'redux';
import user from './user';
import loginDialog from './loginDialog';
import currentTab from './currentTab';
const rootReducer = combineReducers({
    user,
    loginDialog,
    currentTab
});

export default rootReducer;


// initialState
const initialState = {
    currentTab: 'home',
    loginDialog: {
        open: false,
        err: ''
    },
    registerDialog: {
        open: false,
        err: ''
    },
    user: {
        logged: false,
        username: '',
        avatar: '',
        id: ''
    }
}