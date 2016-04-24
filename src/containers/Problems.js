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
    constructor(props){
        super(props);
        this.state={
            searchText:props.filter.title.join(' ')
        }
    }
    componentDidMount = ()=> {
        this.props.getProblemList('all');
    }

    static propTypes = {
        tableData: React.PropTypes.array.isRequired,
        getProblemList: React.PropTypes.func.isRequired
    }

    getRatio(ac, submit) {
        if (1 * submit === 0)return '100%';
        const rate = ((ac / submit) * 100).toFixed(2);
        return rate + `(${ac}/${submit})`;
    }

    handleKeyDown = (e)=> {
        if (e.which === 13) {
            //seasrch
            const keywords = e.currentTarget.value;
        }
    }

    handlePaginationChange = (obj)=> {
        const page = obj.selected;
        //go to page
        if (page === this.props.page)return;
    }

    render() {
        //sample data
        const {tableData, page, total} = this.props;

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
                        <Pagination className="pull-left" onChange={this.handlePaginationChange} totPages={total}
                                    activeIndex={page}/>
                        <div className="pull-right">
                            <SearchIcon style={style.searchIcon}/>
                            <TextField inputStyle={{paddingLeft:'48px',verticalAlign:'middle'}}
                                       hintStyle={{paddingLeft:'48px'}}
                                       underlineStyle={{borderColor:'#cacaca'}}
                                       hintText="Filter"
                                       value={}
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
                                        <Link to={"/problems/"+row.id}>{row.title}</Link>
                                        <div className="pull-right">
                                            {row.tags.map((tag, index)=><span key={index} className="label">{tag}</span>)}
                                        </div>
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
        tableData: state.problems.list,
        page: state.problems.query.page,
        total: state.problems.query.total
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getProblemList
    }, dispatch);
}