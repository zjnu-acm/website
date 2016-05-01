/**
 * Created by kevin on 16-4-28.
 */
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getContestProblemList} from '../../actions/contest';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

function mapStateToProps(state) {
    return {
        problems: state.cproblems
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getContestProblemList
    }, dispatch);
}
@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    constructor(props){
        super(props);
        props.getContestProblemList(props.params.contestId);
    }
    render() {
        const {contest, problems} = this.props;
        return (
            <div className="box2">
                <Table style={{marginBottom:'20px'}}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn width="100px">#</TableHeaderColumn>
                            <TableHeaderColumn>Title</TableHeaderColumn>
            compnent                <TableHeaderColumn width="200px">AC/submit</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {problems.map((problem, i)=> {
                            return (
                                <TableRow key={"row"+i}>
                                    <TableRowColumn width="100px">{problem.problemOrder}</TableRowColumn>
                                    <TableRowColumn><Link to={`/contests/${this.props.params.contestId}/problems/${problem.problemOrder}`}>{problem.title}</Link></TableRowColumn>
                                    <TableRowColumn width="200px"><a href="#">{problem.static.ac}</a>/<a
                                        href="#">{problem.static.submit}</a></TableRowColumn>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        )
    }
}