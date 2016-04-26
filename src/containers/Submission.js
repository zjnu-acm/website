/**
 * Created by kevin on 16-4-26.
 */
import React from 'react';
import {Link} from 'react-router';

import '../../node_modules/highlight.js/styles/vs.css';
import Highlight from 'react-highlight';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import Verdict from '../components/Verdict';
import {verdicts} from '../constants';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getStatusDetail} from '../actions';
function mapStateToProps(state) {
    return {submission: state.submission}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getStatusDetail: getStatusDetail
    }, dispatch);
}
@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    constructor(props) {
        super(props);
        props.getStatusDetail(props.params.submissionId);
    }

    render() {
        const verdictList = Object.keys(verdicts);
        const submissionId = this.props.params.submissionId;
        const {submission, getStatusDetail} = this.props;
        const style = {
            pbLink: {
                paddingRight: '16px',
                lineHeight: '56px',
                fontSize: '20px'
            },
            paper: {
                marginTop: '60px'
            },
            dropdown: {
                width: '150px'
            }
        }
        return (
            <Paper id='submission' className="u-panel">
                <table className="box-info">
                    <tr className="list-inline info">
                        <td><b>ProblemId</b>:<Link to={"/problems/"+submission.problemId}>{submission.problemId}</Link>
                        </td>
                        <td><b>UserId</b>{submission.userId}</td>
                        <td><b>Language</b>{submission.language}</td>
                        <td><b>Result</b><Verdict result={verdicts[verdictList[submission.verdictId]]}/></td>
                    </tr>
                    <tr className="list-inline info">
                        <td><b>Time</b>{submission.time}</td>
                        <td><b>Memory</b>{submission.memory}</td>
                        <td><b>Length</b>{submission.length}</td>
                        <td><b>SubmitTime</b>{submission.submitTime}</td>
                    </tr>
                </table>
                <Highlight>
                    {submission.code}
                </Highlight>
            </Paper>
        );
    }
}