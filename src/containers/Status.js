/**
 * Created by kevin on 16-4-4.
 */
import React from 'react';

import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


import Verdict from '../components/Verdict';

import {verdicts} from '../constants';

import Pagination from '../components/Pagination';

export default class extends React.Component {
    render() {
        const verdictList = Object.keys(verdicts);
        
        const len = verdictList.length;
        let TabRows = [];
        for (let i = 0; i < 50; i++) {
            TabRows.push(
                <TableRow key={"row"+i}>
                    <TableRowColumn width="140px"><a  className="s-plainLink" href="'#">vjudge{i + 1}</a></TableRowColumn>
                    <TableRowColumn><a href="#">{1000 + i}</a></TableRowColumn>
                    <TableRowColumn width="200px"><Verdict
                        result={verdicts[verdictList[Math.floor(Math.random()*len)]]}/></TableRowColumn>
                    <TableRowColumn>600 MS</TableRowColumn>
                    <TableRowColumn>9492 KB</TableRowColumn>
                    <TableRowColumn><a href="#">C++</a></TableRowColumn>
                    <TableRowColumn>800 B</TableRowColumn>
                    <TableRowColumn width='200px'>2016-04-05 16:25:20</TableRowColumn>
                </TableRow>
            )
        }

        return (
            <div>

                <Paper className="u-panel">
                    <Table className="text-center" style={{marginBottom:'20px'}}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn width="140px">User</TableHeaderColumn>
                                <TableHeaderColumn>Problem</TableHeaderColumn>
                                <TableHeaderColumn width="200px">Verdict</TableHeaderColumn>
                                <TableHeaderColumn>Time</TableHeaderColumn>
                                <TableHeaderColumn>Memory</TableHeaderColumn>
                                <TableHeaderColumn>Lang</TableHeaderColumn>
                                <TableHeaderColumn>Length</TableHeaderColumn>
                                <TableHeaderColumn width='200px'>Submit Time</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {TabRows}
                        </TableBody>
                    </Table>
                </Paper>
                <Paper className="u-panel" style={{textAlign:'center'}}>
                    <div className="container-wrapper">
                        <Pagination totPages={4} activeIndex={1}/>
                    </div>

                </Paper>
            </div>
        )
    }
}