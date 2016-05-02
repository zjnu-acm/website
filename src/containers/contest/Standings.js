/**
 * Created by kevin on 16-5-2.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import {getStandingList} from '../../actions/contest';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import Pagination from 'Pagination';

function mapStateToProps(state) {
    return {
        standings: state.standings
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getStandingList
    }, dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    constructor(props) {
        super(props);
        const contestId = props.params.contestId;
        props.getStandingList(contestId);
        this.state = {
            userList: [],
            nickname:''
        }
    }
    getFilter=()=>{
        const filter = {};
        if(this.state.userList.length>0)filter.userId = this.state.userList;
        if(this.state.nickname.trim()!=='')filter.nickname=this.state.nickname.trim();
        return filter;
    }
    handleSubmit = ()=> {
        this.props.getStandingList(this.props.params.contestId, {filter:this.getFilter()})
    }
    handlePaginationChange = (obj) => {
        const page = obj.selected;
        //go to page
        if (page === this.props.page)return;
        this.props.getStandingList(this.props.params.contestId, {page, filter:this.getFilter()});
    }
    handleNicknameTextChange =e => this.setState({nickname:e.target.value})
    render() {
        const style = {
            text: {marginTop: '4px'},
            rank:{width:'3em'},
            accepts:{width:'50px'},
            penalty:{width:'78px'},
            problems:{width:'65px'}
        }
        const contestId = this.props.params.contestId;
        const {standings}  = this.props;
        return (
            <div id="page-standings">
                <Toolbar className="panel-head">
                    <ToolbarGroup float={'right'}>
                        <ToolbarTitle text="Nickname"/>
                        <TextField
                            style={style.text}
                            //fullWidth={true}
                            hintText="Search Nickname"
                            value={this.state.nickname}
                            onChange={this.handleNicknameTextChange}
                        />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarSeparator />
                        <RaisedButton label="Filter" onTouchTap={this.handleSubmit} primary={true}/>
                    </ToolbarGroup>
                </Toolbar>
                <Table className="text-center">
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn style={style.rank}>Rank</TableHeaderColumn>
                            <TableHeaderColumn style={style.nickname}>NickName</TableHeaderColumn>
                            <TableHeaderColumn style={style.accepts}>Accepts</TableHeaderColumn>
                            <TableHeaderColumn style={style.penalty}>Penalty</TableHeaderColumn>
                            {standings.problemOrders.map((problemOrder,i)=> {
                                return <TableHeaderColumn key={i} style={style.problems}>
                                    {problemOrder}
                                </TableHeaderColumn>
                            })}
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} showRowHover={true}>
                        {standings.list.map((row,i)=>{
                            return <TableRow key={i} >
                                <TableRowColumn style={style.rank}>{row.rank}</TableRowColumn>
                                <TableRowColumn style={style.nickname}>{row.nickname}</TableRowColumn>
                                <TableRowColumn style={style.accepts}>{row.accepts}</TableRowColumn>
                                <TableRowColumn style={style.penalty}>{row.penalty}</TableRowColumn>
                                {standings.problemOrders.map((problemOrder,i)=>{
                                    if(problemOrder in row.detail){
                                        const result = row.detail[problemOrder];
                                        return <TableRowColumn key={i} style={style.problems}>
                                            <div className="penalty">{result.penalty}</div>
                                            {result.attempts}
                                        </TableRowColumn>
                                    }
                                    return <TableRowColumn key={i} style={style.problems}></TableRowColumn>
                                })}
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
                <div style={{textAlign:'center'}}>
                    <div className="container-wrapper">
                        <Pagination totPages={standings.total}
                                    onChange={this.handlePaginationChange}
                                    activeIndex={standings.page}/>
                    </div>
                </div>
            </div>
        )
    }
}