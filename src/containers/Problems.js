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
    getRatio(ac,submit){
        if(1*submit === 0)return '100%';
        const rate = ((ac/submit)*100).toFixed(2);
        return rate+`(${ac}/${submit})`;
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
                date: (new Date()).toLocaleDateString()
            }
        });
        return (
            <div>
                <Paper className="u-panel clearfix">
                    <Pagination className="pull-left" totPages={10} activeIndex={2}/>
                    <div className="pull-right">
                        <SearchIcon style={{
                        fill:'#888',
                        padding:'12px',
                        height:'48px',
                        width:'48px',
                        verticalAlign:'middle',
                        marginRight:'-48px'}}/>
                        <TextField inputStyle={{paddingLeft:'48px',verticalAlign:'middle'}}
                                   hintStyle={{paddingLeft:'48px'}} hintText="Filter"/>
                    </div>
                </Paper>


                <Paper className="u-panel">
                    <Table style={{marginBottom:'20px'}}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableHeaderColumn colSpan="6" tooltip="Super Header" style={{textAlign: 'center'}}>
                                Super Header
                            </TableHeaderColumn>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn colSpan="2">Title</TableHeaderColumn>
                                <TableHeaderColumn>Difficulty</TableHeaderColumn>
                                <TableHeaderColumn>Ratio(AC/Submit)</TableHeaderColumn>
                                <TableHeaderColumn>Updated Date</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false} showRowHover={true}>
                            {tableData.map((row, index)=> {
                                <TableRow key={index}>
                                    <TableRowColumn>{row.problemId}</TableRowColumn>
                                    <TableRowColumn>{row.title}</TableRowColumn>
                                    <TableRowColumn>{row.tags.map(tag=><div
                                        className="label">{tag}</div>)}</TableRowColumn>
                                    <TableRowColumn>{row.difficulty}</TableRowColumn>
                                    <TableRowColumn>{this.getRatio(row.ac,row.submit)}</TableRowColumn>
                                    <TableRowColumn>{row.date}</TableRowColumn>
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </Paper>


            </div>
        )
    }
}