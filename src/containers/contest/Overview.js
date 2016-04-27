/**
 * Created by kevin on 16-4-18.
 */
import React from 'react';
import {parseDateTime} from '../../utils';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date()
        }
    }

    componentDidMount = ()=> {
        setInterval(()=>{
            this.setState({
                currentTime: new Date()
            });
        },1000)
    }

    render() {
        let TabRows = [];
        for (let i = 0; i < 10; i++) {
            TabRows.push(
                <TableRow key={"row"+i}>
                    <TableRowColumn width="100px">{String.fromCharCode('A'.charCodeAt(0) + i)}</TableRowColumn>
                    <TableRowColumn width="100px"><a href="#">{1000 + i}</a></TableRowColumn>
                    <TableRowColumn width="500px"><a href="#">A + B Problem ({i + 1})</a></TableRowColumn>
                    <TableRowColumn><a href="#">12</a>/<a href="#">25</a></TableRowColumn>
                </TableRow>
            )
        }
        return (
            <div>
                <div className="box-board clearfix">
                    <ul className="list-left">
                        <li><span className="item">Current Time:</span> </li>
                        <li><span className="item">Start Time:</span> </li>
                        <li><span className="item">End Time:</span> 2016-04-18 17:00:00</li>
                    </ul>
                    <ul className="list-right">
                        <li><span className="item">Contest Type:</span> Public</li>
                        <li><span className="item">Contest Status:</span> Running</li>
                        <li><span className="item">Manager:</span> coach</li>
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