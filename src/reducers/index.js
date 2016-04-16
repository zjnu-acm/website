/**
 * Created by kevin on 16-4-8.
 */
import {combineReducers} from 'redux';
import user from './user';
const rootReducer = combineReducers({
    dialogOpen: user.dialogOpen,
    isLogin: user.isLogin
});

export default rootReducer;

// initialState
const initialState = {
    loginDialog:{
        open:false,
        err:''
    },
    registerDialog:{
        open:false,
        err:''
    },
    user:{
        logged:false,
        username:'',
        avatar:'',
        id:''
    }
}