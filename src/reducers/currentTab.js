/**
 * Created by kevin on 16-4-18.
 */
import {SWITCH_TAB} from '../constants/ActionTypes';
import {tabs} from '../constants';
import {browserHistory} from 'react-router';
export default function currentTab(state='home',action){
    switch(action.type){
        case SWITCH_TAB:
            const tab = tabs[action.dest];
            if(typeof tab !== 'undefined'){
                browserHistory.push('/'+tab)
                return tab
            }
        default:return state
    }
}