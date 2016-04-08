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

import Verdict from '../components/Verdict';

import VerdictStr from '../constants/Verdicts';

import Pagination from '../components/Pagination';

export default class extends React.Component {
    render() {
        const verdictList = Object.keys(VerdictStr);
        
        const len = verdictList.length;
        let TabRows = [];
        for (let i = 0; i < 50; i++) {
            TabRows.push(
                <TableRow key={"row"+i}>
                    <TableRowColumn width="140px">vjudge{i + 1}</TableRowColumn>
                    <TableRowColumn>{1000 + i}</TableRowColumn>
                    <TableRowColumn width="200px"><Verdict
                        result={VerdictStr[verdictList[Math.floor(Math.random()*len)]]}/></TableRowColumn>
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
                    <Table style={{marginBottom:'20px'}}>
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