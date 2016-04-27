/**
 * Created by kevin on 16-4-4.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getContestDetail} from '../../actions';
import {parseDateTime} from '../../utils';
import Status from 'Status';
import {status} from '../../constants';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';
import {Tabs, Tab} from 'material-ui/Tabs';
function mapStateToProps(state) {
    return {contest: state.contest}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getContestDetail
    }, dispatch);
}
@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    constructor(props) {
        super(props);
        props.getContestDetail(props.params.contestId);
        this.state = {
            currentTime: new Date()
        }
    }
    componentDidMount = ()=> {
        setInterval(()=>{
            this.setState({
                currentTime: new Date()
            });
        },100);
        // {parseDateTime(this.state.currentTime)}
    }

    render() {
        const {contest} = this.props;
        const contestId = this.props.params.contestId;
        const startTime = new Date(contest.startTime);
        const endTime = new Date(1*startTime+contest.duration);
        let width = 0;
        if (this.state.currentTime <= startTime) {
            width = 0;
        } else if (this.state.currentTime >= endTime) {
            width = 100;
        } else {
            width = (this.state.currentTime - startTime) / contest.duration * 100;
        }
        return (
            <div id="page-contest">
                <Paper className="u-panel clearfix">
                    <h3>{contest.title}</h3>
                    <div className="text-info text-center clearfix">
                        <div className="pull-left">Current: {parseDateTime(this.state.currentTime)}</div>
                        <span >{status[contest.statusId]}</span>
                        <div className="pull-right">Contestants: ×{contest.attendsCount}</div>
                    </div>
                    <LinearProgress className="progress" value={width} mode="determinate"/>

                </Paper>

                <Tabs className="box1">
                    <Tab label="Overview" value="a"/>
                    <Tab label="Problem" value="b"/>
                    <Tab label="Status"/>
                    <Tab label="Rank"/>
                    <Tab label="Discuss"/>
                </Tabs>
                <Paper className="u-panel">
                    {this.props.children}
                </Paper>
            </div>
        )
    }
}