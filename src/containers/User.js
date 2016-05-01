/**
 * Created by kevin on 16-5-1.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

import {getUserDetail} from '../actions/user';
function mapStateToProps(state) {
    return {
        user: state.user
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserDetail
    }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    constructor(props) {
        super(props);
        props.getUserDetail(props.params.userId);
    }

    render() {
        const {user} = this.props;
        return <div id='page-user' className='clearfix'>
            <Paper className="col-left u-panel">
                <div className="avatar-box">
                    <Avatar size={100} className="avatar"
                            src={user.avatarUrl}/>
                </div>
                <div className="list-box">
                    <ul>
                        <li><b>UserId :</b>{user.userId}</li>
                        <li><b>Nickname :</b>{user.nickname}</li>
                        <li><b>E-mail :</b>{user.email}</li>
                        <li><b>Classname :</b> {user.classname}</li>
                        <li><b>Signature :</b> {user.signature}</li>
                    </ul>
                </div>
            </Paper>
            <div className="col-main">
                <Paper className="u-panel ">
                    <b>Solved Problems:</b>
                    <ul className="list-inline">
                        {user.solved.map((problemId, i)=> {
                            return <li key={i}><Link to={`/problems/${problemId}`}>{problemId}</Link></li>
                        })}
                    </ul>
                </Paper>
            </div>
        </div>
    }
}