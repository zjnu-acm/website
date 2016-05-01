/**
 * Created by kevin on 16-5-1.
 */
import * as types from '../constants/ActionTypes';
const initialState = {
    ranks:{
        total:1,
        page:0,
        size:30,
        list:[
            // {
            //     rank:1,
            //     userId:'',
            //     nickname:'',
            //     signature:'',
            //     classname:'',
            //     static:{
            //         ac:0,
            //         submit:0
            //     }
            // }
        ]
    }
}
export function ranks(state=initialState.ranks,action){
    switch(action.type){
        
    }
}