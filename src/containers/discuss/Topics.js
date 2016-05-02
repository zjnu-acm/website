/**
 * Created by kevin on 16-5-2.
 */
import React from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getTopicList} from '../../actions/topic';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import Pagination from 'Pagination';


function mapStateToProps(state) {
    return {
        topics: state.topics
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getTopicList
    }, dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
        props.getTopicList(this.state.keyword);
    }

    AddTopic = ()=> {

    }
    onSearch = ()=> {
        this.props.getTopicList(this.state.keyword);
    }

    handleKeywordTextChange = e=>this.setState({keyword: e.target.value})
    handlePaginationChange = (obj) => {
        const page = obj.selected;
        //go to page
        if (page === this.props.page)return;
        this.props.getTopicList(this.state.keyword, {page});
    }
    onAdd = ()=> {
        browserHistory.push(`/discuss/add`)
    }

    render() {
        const style = {
            text: {marginTop: '4px'},
            title: {marginBottom: '10px'},
            date: {float: 'right'},
            addBtn: {
                marginLeft:'0px',
                marginRight:'0px'
            }
        }
        const {topics}  = this.props;
        return (
            <Paper id="page-discuss">

                <Toolbar>
                    <ToolbarGroup>
                        <ToolbarTitle text="Discuss"/>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarTitle text="Search"/>
                        <TextField
                            style={style.text}
                            hintText="Search Keyword"
                            value={this.state.keyword}
                            onChange={this.handleKeywordTextChange}
                        />
                        <ToolbarSeparator />

                        <RaisedButton label="Search" primary={true} onTouchTap={this.onSearch}/>
                        <RaisedButton label="Add New Post" secondary={true} style={style.addBtn} onTouchTap={this.onAdd}/>
                    </ToolbarGroup>
                </Toolbar>
                <List className='list-post'>
                    {topics.list.map((topic, i)=> {
                        return <ListItem
                            key={i}
                            value={topic.topicId}
                            leftAvatar={<Avatar src={topic.author.avatarUrl} />}
                            primaryText={
                        <div style={style.title}>
                            <Link to={`/discuss/${topic.topicId}`} className="s-plainLink">{topic.title}</Link>
                            <small style={style.date}>Jan 9, 2014</small>
                        </div>
                        }
                            secondaryText={
                            <ul className="list-inline">
                                <li>Author: <Link to={`/users/${topic.author.userId}`}>{topic.author.nickname}</Link></li>
                                <li>Reply: {topic.reply}</li>
                            </ul>
                        }
                        />
                    })}
                </List>
                <div style={{textAlign:'center'}}>
                    <div className="container-wrapper">
                        <Pagination totPages={topics.total}
                                    onChange={this.handlePaginationChange}
                                    activeIndex={topics.page}/>
                    </div>
                </div>
            </Paper>

        )
    }

}
/*
 <FloatingActionButton style={style.addBtn} onTouchTap={this.onAdd}>
 <ContentAdd />
 </FloatingActionButton>
 */