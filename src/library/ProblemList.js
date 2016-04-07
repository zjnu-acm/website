/**
 * Created by kevin on 16-4-4.
 */
import React from 'react';

import Paper from 'material-ui/lib/paper';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

import TextField from 'material-ui/lib/text-field';
import SearchIcon from 'material-ui/lib/svg-icons/action/search';

import Pagination from '../components/Pagination';

export default class extends React.Component {
    componentDidMount=()=>{
        //add
        // console.log('add body event');
        // document.addEventListener('scroll',this.handleWinScroll);
    }
    handleWinScroll=(e)=>{
        // const target = document.getElementsByClassName('stickyTop')[0];
        // const top = target.getBoundingClientRect().top;
        // console.log(document.body.scrollTop,top);
        // if(top<=48){
        //     target.classList.add('fixed');
        // }else{
        //     target.classList.remove('fixed');
        // }
    }
    render() {
        let TabRows = [];
        for (let i = 0; i < 50; i++) {
            TabRows.push(
                <TableRow key={"row"+i}>
                    <TableRowColumn width="100px">{1000 + i}</TableRowColumn>
                    <TableRowColumn width="600px">A + B Problem ({i + 1})</TableRowColumn>
                    <TableRowColumn>ACdream</TableRowColumn>
                    <TableRowColumn>57.39% (1235/2152)</TableRowColumn>
                </TableRow>
            )
        }
        return (
            <div>
                <Paper className="u-panel" style={{marginTop:'88px'}}>
                    <Table style={{marginBottom:'20px'}}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn width="100px">ID</TableHeaderColumn>
                                <TableHeaderColumn width="600px">Title</TableHeaderColumn>
                                <TableHeaderColumn>Source</TableHeaderColumn>
                                <TableHeaderColumn>Ratio(AC/submit)</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {TabRows}
                        </TableBody>
                    </Table>
                </Paper>

                <Paper className="m-stickbar u-panel u-pl-tools">
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
            </div>
        )
    }
}