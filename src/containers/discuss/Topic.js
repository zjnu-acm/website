/**
 * Created by kevin on 16-5-2.
 */
import React from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getTopicDetail} from '../../actions/topic';
import {openDialog} from '../../actions/dialog';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton'
import ReactQuill  from 'react-quill';
import '../../styles/quill.snow.scss';
import Pagination from 'Pagination';

import {parseDateTime} from '../../utils';
function mapStateToProps(state) {
    return {
        posts: state.topic
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getTopicDetail,
        openDialog
    }, dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        props.getTopicDetail(props.params.topicId);
    }

    handlePaginationChange = (obj) => {
        const page = obj.selected;
        //go to page
        if (page === this.props.page)return;
        this.props.getTopicDetail(this.props.params.topicId, {page});
    }
    onSubmit = ()=>{
        this.props.openDialog('hint','Reply Success!');
        this.setState({text:''})
    }
    render() {
        const {posts}  = this.props;
        const style = {
            submitBtn: {
                textAlign: 'right',
                padding: '10px 30px 10px',
                backgroundColor:'#f9f9f9'
            },
            editor:{
                height:'200px'
            }
        }
        return (
            <div id="page-discuss">
                {posts.list.map((post, i)=> {
                    return <Paper className="post" key={i}>
                        <div className="side">
                            <div className="username">
                                <Link to={post.author.userId} className="s-plainLink">{post.author.nickname}</Link>
                            </div>
                            <Avatar size={100} className="avatar"
                                    src={post.author.avatarUrl}/>
                        </div>
                        <div className="main">
                            <div className="head">
                                <span className="title">{post.title}</span>
                                <small className="text-muted">发表于{parseDateTime(post.createTime)}</small>
                            </div>
                            <div className="body" dangerouslySetInnerHTML={{__html:post.content}}>
                            </div>
                        </div>
                    </Paper>
                })}
                <Paper className='u-panel' style={{textAlign:'center'}}>
                    <div className="container-wrapper">
                        <Pagination totPages={posts.total}
                                    onChange={this.handlePaginationChange}
                                    activeIndex={posts.page}/>
                    </div>
                </Paper>
                <Paper>
                    <ReactQuill style={style.editor} theme="snow" value={this.state.text} onChange={this.onTextChange}/>
                    <div style={style.submitBtn}>
                        <RaisedButton label="Submit" primary={true} onTouchTap={this.onSubmit}/>
                    </div>
                </Paper>
            </div>
        )
    }
}