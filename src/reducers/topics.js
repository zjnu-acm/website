/**
 * Created by kevin on 16-5-3.
 */
import * as types from '../constants/ActionTypes';
const initialState = {
    topics:{
        total:1,
        page:0,
        size:30,
        list:[
            //     {
            //     title:'',
            //     author:{
            //         userId:'',
            //         nickname:'',
            //         avatarUrl:''
            //     },
            //     reply:0
            // }
            ]
    },
    topic:{
        total:1,
        page:0,
        size:10,
        list:[
            // {
            //     postId:0,
            //     title:'',
            //     createTime:'',
            //     content:'',
            //     replyId:0,
            //     author:{
            //         userId:'',
            //         nickname:'',
            //         avatarUrl:''
            //     }
            // }
        ]
    }
}
export  function topics(state = initialState.topics,action){
    switch(action.type){
        case types.CHANGE_TOPIC_LIST:
            return Object.assign({},state,action.topics)
        default:
            return state;
    }
}
export  function topic(state=initialState.topic,action){
    switch(action.type){
        case types.CHANGE_TOPIC_DETAIL:
            return Object.assign({},state,action.topic);
        default:
            return state;
    }
}