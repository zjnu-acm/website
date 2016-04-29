/**
 * Created by kevin on 16-4-4.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getContestList} from '../actions';
import Status from 'Status';
import {status} from '../constants';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {parseDateTime,DateSubtract} from '../utils';
import Pagination from '../components/Pagination';

function mapStateToProps(state) {
    return {contests: state.contests}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getContestList
    },dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            statusId: -1,
            title: ''
        }
        props.getContestList();
    }

    handleDropDownChange = (e, i, v)=>this.setState({statusId: v})
    handleInputChange = e=>this.setState({title: e.target.value})
    handleSubmit = ()=> {
        //TODO
        const filter = {};
        if (this.state.statusId != -1)filter.statusId = this.state.statusId;
        if (this.state.title != '')filter.title = this.state.title;
        this.props.getContestList({filter});
    }
    handlePaginationChange=(obj)=>{
        const page = obj.selected;
        //go to page
        if (page === this.props.page)return;
        const filter = {};
        if (this.state.statusId != -1)filter.statusId = this.state.statusId;
        if (this.state.title != '')filter.title = this.state.title;
        this.props.getContestList({page,filter});
    }
    render() {
        const {contests} = this.props;
        const style = {
            text: {marginTop: '4px'},
            id: {width: '100px'},
            //title: {width: '260px'},
            startTime: {width: '190px'},
            duration: {width: '140px'},
            status:{width:'140px'},
            attends: {width: '140px'}
        }
        return (
            <div>
                <Paper className="u-panel">
                    <Toolbar className="panel-head">
                        <ToolbarGroup float={"right"}>
                            <ToolbarTitle text="Contest"/>
                            <TextField
                                style={style.text}
                                //fullWidth={true}
                                hintText="Contest Name"
                                //floatingLabelText="Problem Id"
                                value={this.state.title}
                                onChange={this.handleInputChange}
                            />
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <ToolbarTitle text="Status"/>
                            <DropDownMenu autoWidth={false} style={{width:'120px'}} value={this.state.statusId}
                                          onChange={this.handleDropDownChange}>
                                <MenuItem value={-1} primaryText="All"/>
                                <MenuItem value={0} primaryText="Pending"/>
                                <MenuItem value={1} primaryText="Running"/>
                                <MenuItem value={2} primaryText="Ended"/>
                            </DropDownMenu>
                            <ToolbarSeparator />
                            <RaisedButton label="Filter" onTouchTap={this.handleSubmit} primary={true}/>
                        </ToolbarGroup>
                    </Toolbar>
                    <Table style={{marginBottom:'20px'}}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn style={style.id}>Id</TableHeaderColumn>
                                <TableHeaderColumn colspan="2" style={style.title}>Title</TableHeaderColumn>
                                {/*<TableHeaderColumn style={style.status}>Status</TableHeaderColumn>*/}
                                <TableHeaderColumn style={style.startTime}>Start Time</TableHeaderColumn>
                                <TableHeaderColumn style={style.duration}>Duration</TableHeaderColumn>

                                <TableHeaderColumn style={style.attends}>Attends</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {contests.list.map((contest, i)=> {
                                return <TableRow key={i}>
                                    <TableRowColumn style={style.id}>
                                        {contest.contestId}
                                    </TableRowColumn>
                                    <TableRowColumn style={style.title}>
                                        <Link to={"/contests/"+contest.contestId}>{contest.title}</Link>
                                    </TableRowColumn>
                                    <TableRowColumn style={style.status}>
                                        <Status name={status[contest.status%3]}/>
                                    </TableRowColumn>
                                    <TableRowColumn style={style.startTime}>
                                        {contest.startTime}
                                    </TableRowColumn>
                                    <TableRowColumn style={style.duration}>
                                        {DateSubtract(contest.startTime,contest.endTime)}
                                    </TableRowColumn>
                                    <TableRowColumn style={style.attends}>
                                        {contest.attendsCount}
                                    </TableRowColumn>
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </Paper>
                <Paper className="u-panel text-center">
                    <Pagination totPages={contests.total} activeIndex={contests.page}
                                onChange={this.handlePaginationChange}
                    />
                </Paper>
            </div>
        )
    }
}