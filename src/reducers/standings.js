/**
 * Created by kevin on 16-5-2.
 */
import * as types from '../constants/ActionTypes';
const initialState={
    total:1,
    page:0,
    size:1,
    problemOrders:[],
    list:[
        // {
        //     rank:0,
        //     userId:'',
        //     nickname:'',
        //     accepts:'',
        //     penalty:'',
        //     detail:{
        //         A:{
        //             penalty:'',
        //             attempts:0
        //         }
        //     }
        // }
    ]
}
export function standings(state=initialState,action){
    switch(action.type){
        case types.CHANGE_STANDING_LIST:
            return Object.assign({},state,action.standings);
        default:
            return state;
    }
}