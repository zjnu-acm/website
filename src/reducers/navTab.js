/**
 * Created by kevin on 16-4-18.
 */
import {TAB_SWITCH} from '../constants/ActionTypes';
import {tabs} from '../constants';


const initialState = {
    head: tabs.head[0],
    contest: tabs.contest[0]
}
//get initial State from browser url
function getInitialTab(pathStr = window.location.pathname) {
    const regex = /[^\/\?\s]+/g;
    const pathSet = window.location.pathname.match(regex);
    const keys = ['head', 0, 'contest'];
    if (pathSet && pathSet.length > 0) {
        pathSet.forEach((pathname, i)=> {
            if (i == 0 || i == 2) {
                const tabSet = tabs[keys[i]];//head or contest
                if (tabSet.indexOf(pathname) != -1) {//在已知的tab里，跳转到key为pathname的tab
                    initialState[keys[i]] = pathname;
                }
            }
        })
    }
    return initialState;
}

export default function navTab(state = getInitialTab(), action) {
    switch (action.type) {
        case TAB_SWITCH:
            return Object.assign({}, state, {[action.name]: action.tab})
        default:
            return state
    }
}