/**
 * Created by kevin on 16-4-4.
 */
import React from 'react';

import Paper from 'material-ui/Paper';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField'
import SearchIcon from 'material-ui/svg-icons/action/search';

import Pagination from 'Pagination';

export default class extends React.Component {
    componentDidMount = ()=> {
        //add
        // console.log('add body event');
        // document.addEventListener('scroll',this.handleWinScroll);
    }
    handleWinScroll = (e)=> {
        // const target = document.getElementsByClassName('stickyTop')[0];
        // const top = target.getBoundingClientRect().top;
        // console.log(document.body.scrollTop,top);
        // if(top<=48){
        //     target.classList.add('fixed');
        // }else{
        //     target.classList.remove('fixed');
        // }
    }

    getRatio(ac, submit) {
        if (1 * submit === 0)return '100%';
        const rate = ((ac / submit) * 100).toFixed(2);
        return rate + `(${ac}/${submit})`;
    }

    render() {
        const tableData = Array.from({length: 30}, (obj, index)=> {
            return {
                problemId: 1000 + index,
                title: 'A+B Problem',
                tags: ['Math', 'Brute Force'],
                difficulty: '40%',
                static: {
                    ac: 1235,
                    submit: 2152
                },
                date: (new Date()).toLocaleString()
            }
        });

        const style = {
            id: {
                width: '100px'
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
                                    <Pagination className="pull-left" totPages={10} activeIndex={2}/>
                                    <div className="pull-right">
                                        <SearchIcon style={style.searchIcon}/>
                                        <TextField inputStyle={{paddingLeft:'48px',verticalAlign:'middle'}}
                                                   hintStyle={{paddingLeft:'48px'}}
                                                   underlineStyle={{borderColor:'#cacaca'}}
                                                   hintText="Filter"/>
                                    </div>
                        </div>
                    <Table style={{marginBottom:'20px'}}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn style={style.id}>ID</TableHeaderColumn>
                                <TableHeaderColumn colSpan="2">Title</TableHeaderColumn>
                                <TableHeaderColumn>Difficulty</TableHeaderColumn>
                                <TableHeaderColumn>Ratio(AC/Submit)</TableHeaderColumn>
                                <TableHeaderColumn>Updated Date</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false} showRowHover={true}>
                            {tableData.map((row, index)=> <TableRow key={row.problemId}>
                                    <TableRowColumn style={style.id}>{row.problemId}</TableRowColumn>
                                    <TableRowColumn>{row.title}</TableRowColumn>
                                    <TableRowColumn>
                                        {row.tags.map((tag, index)=><span key={index} className="label">{tag}</span>)}
                                    </TableRowColumn>
                                    <TableRowColumn>{row.difficulty}</TableRowColumn>
                                    <TableRowColumn>{this.getRatio(row.static.ac, row.static.submit)}</TableRowColumn>
                                    <TableRowColumn>{row.date}</TableRowColumn>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}