/**
 * Created by kevin on 16-4-4.
 */
import React from 'react';

import Paper from 'material-ui/Paper';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField'
import SearchIcon from 'material-ui/svg-icons/action/search';

import Pagination from 'Pagination';

import {connect} from 'react-redux';
import {getProblemList} from '../actions';

import {bindActionCreators} from 'redux';

import {Link} from 'react-router';

@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.props.getProblemList();
        this.state = {
            searchText:''
        }
    }
    static propTypes = {
        problems: React.PropTypes.object.isRequired,
        getProblemList: React.PropTypes.func.isRequired
    }

    getRatio(ac, submit) {
        if (1 * submit === 0)return '100%';
        const rate = ((ac / submit) * 100).toFixed(2);
        return rate + `(${ac}/${submit})`;
    }

    handleTextChange = (e)=> {
        this.setState({searchText: e.target.value});
    }
    handleKeyDown = (e)=> {
        if (e.which === 13) {
            //seasrch
            const filter = {};
            const keywords = this.state.searchText;
            if(keywords!=='')filter.title = keywords;
            this.props.getProblemList({filter});
        }
    }

    handlePaginationChange = (obj)=> {
        const page = obj.selected;
        //go to page
        if (page === this.props.page)return;
        //get filter
        const filter = {};
        const keywords = this.state.searchText;
        if(keywords!=='')filter.title = keywords;
        this.props.getProblemList({page,filter});
    }

    render() {
        //sample data
        const {problems} = this.props;
        const tableData = problems.list;
        const style = {
            id: {
                width: '100px'
            },
            difficulty: {
                width: '100px'
            },
            ratio: {
                width: '180px'
            },
            date: {
                width: '190px'
            },
            searchIcon: {
                fill: '#888',
                padding: '12px',
                height: '48px',
                width: '48px',
                verticalAlign: 'middle',
                marginRight: '-48px'
            }
        }
        return (
            <div>
                <Paper className="u-panel">
                    <div className="panel-head clearfix">
                        <Pagination className="pull-left" onChange={this.handlePaginationChange}
                                    totPages={problems.total}
                                    activeIndex={problems.page}/>
                        <div className="pull-right" style={{width:'300px'}}>
                            <SearchIcon style={style.searchIcon}/>
                            <TextField inputStyle={{paddingLeft:'48px',verticalAlign:'middle'}}
                                       fullWidth={true}
                                       hintStyle={{paddingLeft:'48px'}}
                                       underlineStyle={{borderColor:'#cacaca'}}
                                       hintText="Filter"
                                       onChange={this.handleTextChange}
                                       value={this.state.searchText}
                                       onKeyDown={this.handleKeyDown}
                            />
                        </div>
                    </div>
                    <Table style={{marginBottom:'20px'}}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn style={style.id}>ID</TableHeaderColumn>
                                <TableHeaderColumn>Title</TableHeaderColumn>
                                <TableHeaderColumn style={style.difficulty}>Difficulty</TableHeaderColumn>
                                <TableHeaderColumn style={style.ratio}>Ratio(AC/Submit)</TableHeaderColumn>
                                <TableHeaderColumn style={style.date}>Updated Date</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>

                        <TableBody displayRowCheckbox={false} showRowHover={true}>
                            {tableData.map((row, index)=> <TableRow key={row.problemId}>
                                    <TableRowColumn style={style.id}>{row.problemId}</TableRowColumn>
                                    <TableRowColumn>
                                        <div className="pull-right">
                                            {row.tags.map((tag, index)=><span key={index} className="label">{tag}</span>)}
                                        </div>
                                        <Link to={"/problems/"+row.problemId}>{row.title}</Link>
                                    </TableRowColumn>
                                    <TableRowColumn style={style.difficulty}>{row.difficulty}</TableRowColumn>
                                    <TableRowColumn
                                        style={style.ratio}>{this.getRatio(row.static.ac, row.static.submit)}</TableRowColumn>
                                    <TableRowColumn style={style.date}>{row.date}</TableRowColumn>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        problems: state.problems
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getProblemList
    }, dispatch);
}