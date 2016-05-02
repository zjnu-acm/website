/**
 * Created by kevin on 16-5-2.
 */
import {request} from '../utils';
import * as types from '../constants/ActionTypes';
export function getTopicList(keyword = '', desc = {page: 0, size: 30}) {
    return dispatch=> {
        request({
            url: `topics`, query: Object.assign({keyword}, {
                page: desc.page || 0,
                size: desc.size || 30
            })
        }).then(res=> {
            dispatch({
                type: types.CHANGE_TOPIC_LIST,
                topics: Object.assign({}, desc, res, {keyword})
            })
        })
    }
}
export function getTopicDetail(topicId,desc = {page:0,size:10}){
    return dispatch=>{
        request({
            url:`topics/${topicId}`,
            page:desc.page||0,
            size:desc.size||10
        }).then(res=>{
            dispatch({
                type:types.CHANGE_TOPIC_DETAIL,
                topic:Object.assign({},desc,res)
            })
        })
    }
}