/**
 * Created by kevin on 16-4-18.
 */
import React from 'react';
import {parseDateTime} from '../../utils';

import Status from 'Status';
import {status} from '../../constants';
export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {contest,currentTime} = this.props;
        return (
            <div>
                <div className="box-board clearfix">
                     <ul className="list-left">
                        <li><span className="item">Current Time:</span> {parseDateTime(currentTime)} </li>
                        <li><span className="item">Start Time:</span> {parseDateTime(contest.startTime)}</li>
                        <li><span className="item">End Time:</span> {parseDateTime(contest.endTime)}</li>
                    </ul>
                    <ul className="list-right">
                        <li><span className="item">Contest Type:</span> Public</li>
                        <li><span className="item">Contest Status:</span> <Status name={status[contest.statusId]} /></li>
                        <li><span className="item">Manager:</span> <a href="#">{contest.host.nickname}</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
/*
 <div className="box2">
 <Table style={{marginBottom:'20px'}}>
 <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
 <TableRow>
 <TableHeaderColumn width="100px">#</TableHeaderColumn>
 <TableHeaderColumn width="100px">ID</TableHeaderColumn>
 <TableHeaderColumn width="500px">Title</TableHeaderColumn>
 <TableHeaderColumn>AC/submit</TableHeaderColumn>
 </TableRow>
 </TableHeader>
 <TableBody displayRowCheckbox={false}>
 {TabRows}
 </TableBody>
 </Table>
 </div>
 */