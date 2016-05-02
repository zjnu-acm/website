/**
 * Created by kevin on 16-4-4.
 */
import React from 'react';
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


import Verdict from 'Verdict';
import Pagination from 'Pagination';

import {verdicts} from '../../constants';

import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import {parseDateTime} from '../../utils';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getContestSubmissionList} from '../../actions/contest';
import {getLanguageList} from '../../actions/language';


function mapStateToProps(state) {
    return {
        submissions: state.submissions,
        languages: state.languages
    }
}
function mapDispatchToProps(dipatch) {
    return bindActionCreators({
        getSubmissionList: getContestSubmissionList,
        getLanguageList
    }, dipatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    constructor(props) {
        super(props);
        const contestId = props.params.contestId;
        props.getSubmissionList(contestId);
        if (typeof props.languages[contestId] === 'undefined') {
            props.getLanguageList(contestId);
        }
        this.state = {
            verdictId: -1,
            problemOrder: '',
            userId: ''
        };
    }

    handleChange = (event, index, value) => this.setState({verdictId: value});
    handleUserTextChange = e => this.setState({userId: e.target.value});
    handleProblemTextChange = e => this.setState({problemOrder: e.target.value});
    getFilter=()=>{
        const filter = {};
        if (this.state.verdictId!== -1)filter.verdictId = this.state.verdictId;
        if (this.state.problemOrder.trim() !== '')filter.problemOrder = this.state.problemOrder.trim();
        if (this.state.userId.trim() !== '')filter.userId = this.state.userId.trim();
        return filter;
    }
    handleSubmit = ()=> {
        
        this.props.getSubmissionList(this.props.params.contestId, {filter:this.getFilter()})
    }
    handlePaginationChange = (obj) => {
        const page = obj.selected;
        //go to page
        if (page === this.props.page)return;
        this.props.getSubmissionList(this.props.params.contestId, {page, filter:this.getFilter()});
    }

    render() {
        const verdictList = Object.keys(verdicts);
        const {submissions} = this.props;
        const contestId = this.props.params.contestId;
        const languages = this.props.languages[contestId] || [];

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
                            hintText="Problem Order"
                            value={this.state.problemOrder}
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
                                    <a className="s-plainLink" href="'#">{submission.userId}</a>
                                </TableRowColumn>
                                <TableRowColumn style={style.problem}>
                                    <Link
                                        to={`/contests/${contestId}/problems/${submission.problemOrder}`}>{submission.problemOrder}</Link>
                                </TableRowColumn>
                                <TableRowColumn style={style.verdict}>
                                    <Verdict result={verdicts[verdictList[submission.verdictId]]}/>
                                </TableRowColumn>
                                <TableRowColumn style={style.time}>{submission.time}</TableRowColumn>
                                <TableRowColumn style={style.memory}>{submission.memory}</TableRowColumn>
                                <TableRowColumn style={style.lang}>
                                    {!submission.accessible ?
                                        <Link
                                            to={`/contests/${contestId}/status/`+submission.submissionId}>{language}</Link> :
                                        language
                                    }
                                </TableRowColumn>
                                <TableRowColumn style={style.length}>{submission.length}</TableRowColumn>
                                <TableRowColumn style={style.submit}>{parseDateTime(submission.submitTime)}</TableRowColumn>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
                <div style={{textAlign:'center'}}>
                    <div className="container-wrapper">
                        <Pagination totPages={submissions.total}
                                    onChange={this.handlePaginationChange}
                                    activeIndex={submissions.page}/>
                    </div>
                </div>
            </div>
        )
    }
}