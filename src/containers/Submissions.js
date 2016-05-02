/**
 * Created by kevin on 16-4-4.
 */
import React from 'react';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import Verdict from '../components/Verdict';

import {verdicts} from '../constants';

import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


import Pagination from '../components/Pagination';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {parseDateTime} from '../utils';
import {getSubmissionList} from '../actions/submission';
import {getLanguageList} from '../actions/language';

function mapStateToProps(state) {
    return {
        submissions: state.submissions,
        languages: state.languages
    }
}
function mapDispatchToProps(dipatch) {
    return bindActionCreators({
        getSubmissionList,
        getLanguageList
    }, dipatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    constructor(props) {
        super(props);
        props.getSubmissionList();
        if (typeof props.languages.all === 'undefined') {
            props.getLanguageList();
        }
        this.state = {
            verdictId: -1,
            problemId: '',
            userId: ''
        };
    }

    static propTypes = {
        // submissions:React.PropTypes.shape({
        //     total:React.PropTypes.number.isRequired,
        //     page:React.PropTypes.number.isRequired,
        //     size:React.PropTypes.number.isRequired,
        //     list:React.PropTypes.arrayOf(React.PropTypes.shape({
        //         userId:React.PropTypes.string.isRequired,
        //         problemId:React.PropTypes.number.isRequired,
        //         verdictId:React.PropTypes.number.isRequired,
        //         time:React.PropTypes.string.isRequired,
        //         memory:React.PropTypes.string.isRequired,
        //         languageId:React.PropTypes.string.isRequired,
        //         length:React.PropTypes.string.isRequired,
        //         submitTime:React.PropTypes.string.isRequired,
        //         accessible:React.PropTypes.bool.isRequired,
        //         compileError:React.PropTypes.string
        //     }))
        // }),
        // languages:React.PropTypes.object
    }
    handleChange = (event, index, value) => this.setState({verdictId: value});
    handleUserTextChange = e => this.setState({userId: e.target.value});
    handleProblemTextChange = e => this.setState({problemId: e.target.value});
    handleSubmit = ()=> {
        const filter = {};
        if (this.state.verdictId !== -1)filter.verdictId = this.state.verdictId;
        if (this.state.problemId !== '')filter.problemId = this.state.problemId;
        if (this.state.userId !== '')filter.userId = this.state.userId;
        this.props.getSubmissionList({filter})
    }
    handlePaginationChange = (obj) => {
        const page = obj.selected;
        //go to page
        if (page === this.props.page)return;
        const filter = {};
        if (this.state.verdictId !== -1)filter.verdictId = this.state.verdictId;
        if (this.state.problemId !== '')filter.problemId = this.state.problemId;
        if (this.state.userId !== '')filter.userId = this.state.userId;
        this.props.getSubmissionList({page, filter});
    }

    render() {
        const verdictList = Object.keys(verdicts);
        const len = verdictList.length;
        const {submissions} = this.props;
        const languages = this.props.languages.all || [];
        const style = {
            user: {width: '140px'},
            problem: {width: '100px'},
            verdict: {width: '220px'},
            time: {width: '130px'},
            memory: {width: '130px'},
            lang: {width: '140px'},
            submit: {width: '190px'},
            text: {marginTop: '4px'},
            //group:{paddingRight:'0px'}
        }
        return (
            <div>
                <Paper className="u-panel">
                    <Toolbar className="panel-head">
                        <ToolbarGroup style={style.group}>
                            <ToolbarTitle text="User"/>
                            <TextField
                                style={style.text}
                                //fullWidth={true}
                                hintText="User Id"
                                //floatingLabelText="User Id"
                                value={this.state.userId}
                                onChange={this.handleUserTextChange}
                            />
                        </ToolbarGroup>
                        <ToolbarGroup style={style.group}>
                            <ToolbarTitle text="Problem"/>
                            <TextField
                                style={style.text}
                                //fullWidth={true}
                                hintText="Problem Id"
                                //floatingLabelText="Problem Id"
                                value={this.state.problemId}
                                onChange={this.handleProblemTextChange}
                            />
                        </ToolbarGroup>
                        <ToolbarGroup float={"right"}>
                            <ToolbarTitle text="Verdict"/>
                            <DropDownMenu autoWidth={false} style={{width:'240px'}} value={this.state.verdictId}
                                          onChange={this.handleChange}>
                                <MenuItem value={-1} primaryText="All"/>
                                {verdictList.map((verdictName, i)=>
                                    <MenuItem key={i} value={i} primaryText={verdicts[verdictName]}/>)}
                            </DropDownMenu>
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <ToolbarSeparator />
                            <RaisedButton label="Filter" onTouchTap={this.handleSubmit} primary={true}/>
                        </ToolbarGroup>
                    </Toolbar>
                    <Table className="text-center" style={{marginBottom:'20px'}}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn style={style.user}>User</TableHeaderColumn>
                                <TableHeaderColumn style={style.problem}>Problem</TableHeaderColumn>
                                <TableHeaderColumn style={style.verdict}>Verdict</TableHeaderColumn>
                                <TableHeaderColumn style={style.time}>Time</TableHeaderColumn>
                                <TableHeaderColumn style={style.memory}>Memory</TableHeaderColumn>
                                <TableHeaderColumn style={style.lang}>Lang</TableHeaderColumn>
                                <TableHeaderColumn style={style.length}>Length</TableHeaderColumn>
                                <TableHeaderColumn style={style.submit}>Submit Time</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {submissions.list.map((submission, i)=> {
                                let language = languages.find(lang=>lang.languageId === submission.languageId) || 'unknown';
                                if (language !== 'unknown')language = language.name;
                                return <TableRow key={"row"+i}>
                                    <TableRowColumn style={style.user}>
                                        <Link className="s-plainLink" to={`/users/${submission.userId}`}>{submission.userId}</Link>
                                    </TableRowColumn>
                                    <TableRowColumn style={style.problem}>
                                        <Link to={"/problems/"+submission.problemId}>{submission.problemId}</Link>
                                    </TableRowColumn>
                                    <TableRowColumn style={style.verdict}>
                                        <Verdict result={verdicts[verdictList[submission.verdictId]]}/>
                                    </TableRowColumn>
                     parseDateTime               <TableRowColumn style={style.time}>{submission.time}</TableRowColumn>
                                    <TableRowColumn style={style.memory}>{submission.memory}</TableRowColumn>
                                    <TableRowColumn style={style.lang}>
                                        {submission.accessible ?
                                            <Link to={"/status/"+submission.submissionId}>{language}</Link> :
                                            language
                                        }
                                    </TableRowColumn>
                                    <TableRowColumn style={style.length}>{submission.length}</TableRowColumn>
                                    <TableRowColumn style={style.submit}>{parseDateTime(submission.submitTime)}</TableRowColumn>
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </Paper>
                <Paper className="u-panel" style={{textAlign:'center'}}>
                    <div className="container-wrapper">
                        <Pagination totPages={submissions.total}
                                    onChange={this.handlePaginationChange}
                                    activeIndex={submissions.page}/>
                    </div>
                </Paper>
            </div>
        )
    }
}