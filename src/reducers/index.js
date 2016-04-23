/**
 * Created by kevin on 16-4-8.
 */
import {combineReducers} from 'redux';
import user from './user';
import dialogs from './dialogs';
import currentTab from './currentTab';
const rootReducer = combineReducers(Object.assign({
    user,
    currentTab,
    dialogs
}));

export default rootReducer;


// initialState
const initialState = {
    currentTab: 'home',
    dialogs:{
        login:{
            open:false,
            error:''
        },
        register:{
            open:false,
            error:''
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
    }
}