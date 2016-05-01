/**
 * Created by kevin on 16-4-4.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import {getUserList} from '../actions/user';

import Pagination from 'Pagination';



function mapStateToProps(state) {
    return {users: state.users}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserList
    }, dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    constructor(props) {
        super(props);
        props.getUserList();
        this.state={
            userId:'',
            classname:''
        }
    }
    getRatio(ac, submit) {
        if (1 * submit === 0)return '100%';
        const rate = ((ac / submit) * 100).toFixed(2);
        return rate + `(${ac}/${submit})`;
    }
    handleClassTextChange =e=>this.setState({classname:e.target.value})
    handleUserTextChange = e=>this.setState({userId:e.target.value})
    getFilter=()=>{
        const filter = {};
        if (this.state.userId !== '')filter.userId = this.state.userId;
        if (this.state.classname !== '')filter.classname = this.state.classname;
        return filter;
    }
    handleSubmit = ()=> {
        const filter = this.getFilter();
        this.props.getUserList({filter})
    }
    handlePaginationChange = (obj) => {
        const page = obj.selected;
        //go to page
        if (page === this.props.page)return;
        const filter = this.getFilter();
        this.props.getUserList({page, filter});
    }
    render() {
        const {users} = this.props;
        const style = {
            user: {width: '140px'},
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
                            <ToolbarTitle text="Class"/>
                            <TextField
                                style={style.text}
                                //fullWidth={true}
                                hintText="Class Name"
                                //floatingLabelText="Problem Id"
                                value={this.state.classname}
                                onChange={this.handleClassTextChange}
                            />
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <ToolbarSeparator />
                            <RaisedButton label="Filter" onTouchTap={this.handleSubmit} primary={true}/>
                        </ToolbarGroup>
                    </Toolbar>
                    <Table style={{marginBottom:'20px'}}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn width="100px">Rank</TableHeaderColumn>
                                <TableHeaderColumn>User</TableHeaderColumn>
                                <TableHeaderColumn>Nickname</TableHeaderColumn>
                                <TableHeaderColumn width="300px">Signature</TableHeaderColumn>
                                <TableHeaderColumn width="250px">Major(Class)</TableHeaderColumn>
                                <TableHeaderColumn width="200px">Ratio(AC/submit)</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {users.list.map((user, i)=> {
                                return <TableRow key={"row"+i}>
                                    <TableRowColumn width="100px">{user.rank||(i+1)}</TableRowColumn>
                                    <TableRowColumn>
                                        <Link to={`/users/${user.userId}`}>{user.userId}</Link>
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {user.nickname}
                                    </TableRowColumn>
                                    <TableRowColumn style={{width:'300px'}}>{user.signature}</TableRowColumn>
                                    <TableRowColumn width="250px">{user.classname}</TableRowColumn>
                                    <TableRowColumn width="200px">{this.getRatio(user.static.ac,user.static.submit)}</TableRowColumn>
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </Paper>

                <Paper className="u-panel text-center">
                    <Pagination totPages={users.total} activeIndex={users.page} onChange={this.handlePaginationChange}/>
                </Paper>
            </div>
        )
    }
}