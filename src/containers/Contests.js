/**
 * Created by kevin on 16-4-4.
 */
import React from 'react';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';

import Pagination from '../components/Pagination';

const users = ["rrtyui", "vjudge4", "vjudge2", "vjudge1", "vjudge5", "vjudge3", "mathlover", "huantwofat", "19891101", "qian99", "islands", "syiml", "a569329637", "bnmjtz", "last_one", "flag", "Heart_Blue", "Napoleon", "poursoul", "TaoSama"];
const nicknames = ["Sithope", "马孟起", "张翼德", "关云长", "黄汉升", "赵子龙", "mathlover", "huantwofat", "19891101", "baka", "islands", "T^T", "gsq", "__M子__", "last_one", "flag", "Heart Blue", "Napoleon", "Luna", "陆文韬"];
const signs = ["风华绝代", "", "", "", "", "", "欢迎来戳mathlover.info", "", "", "", "", "9", "", "", "", "", "死妹控@恋がさくころ桜どき", "", "", ""];
export default class extends React.Component {
    render() {
        let TabRows = [];
        for (let i = 0; i < 50; i++) {
            TabRows.push(
                <TableRow key={"row"+i}>
                    <TableRowColumn width="100px">{1 + i}</TableRowColumn>
                    <TableRowColumn>
                        <Link to={"/contests/"+i }>{users[i]}</Link>
                    </TableRowColumn>
                    <TableRowColumn>
                        {nicknames[i]}
                    </TableRowColumn>
                    <TableRowColumn style={{width:'300px'}}>{signs[i]}</TableRowColumn>
                    <TableRowColumn width="250px">Software Engineering(121)</TableRowColumn>
                    <TableRowColumn width="200px">57.39% (1235/2152)</TableRowColumn>
                </TableRow>
            )
        }
        return (
            <div>
                <Paper className="u-panel clearfix">
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
                            {TabRows}
                        </TableBody>
                    </Table>
                </Paper>

                <Paper className="u-panel text-center">
                    <Pagination totPages={10} activeIndex={2}/>
                </Paper>
            </div>
        )
    }
}