/**
 * Created by kevin on 16-4-18.
 */
import {TAB_SWITCH} from '../constants/ActionTypes';
import {tabs} from '../constants';

//get initial State from browser
function getInitialTab() {
    const regex = /[^\/\?\s]+/g;
    const currentPath = window.location.pathname.match(regex);
    //暂时返回第一个path
    
    const result = (currentPath && currentPath.length) ? Object.keys(tabs).find(tab => tabs[tab] === currentPath[0]) : 'home';
    return result;
}

export default function currentTab(state = getInitialTab(), action) {
    switch (action.type) {
        case TAB_SWITCH:
            return action.tab||state
        default:
            return state
    }
}