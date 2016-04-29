/**
 * Created by kevin on 16-4-4.
 */
import React from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getContestDetail, switchTab} from '../../actions';
import {parseDateTime} from '../../utils';
import Status from 'Status';
import {status} from '../../constants';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';
import {Tabs, Tab} from 'material-ui/Tabs';
function mapStateToProps(state) {
    return {
        contest: state.contest,
        contestTab: state.navTab.contest,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getContestDetail,
        switchTab
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
        this.timerId = setInterval(()=> {
            this.setState({
                currentTime: new Date()
            });
        }, 1000);
    }
    componentWillUnmount = ()=> {
        //记住要清除定时器，不然会泄漏！！！
        clearInterval(this.timerId);
    }
    handleTabChange = (value)=> {
        browserHistory.push(`/contests/${this.props.params.contestId}/${value}`);
        this.props.switchTab(value, 'contest');
    }

    render() {
        const {contest, contestTab} = this.props;
        const contestId = this.props.params.contestId;
        contest.startTime = new Date(contest.startTime);
        contest.endTime = new Date(contest.startTime);
        let percent = 0;
        if (this.state.currentTime <= contest.startTime) {
            percent = 0;
        } else if (this.state.currentTime >= contest.endTime) {
            percent = 100;
        } else {
            percent = (this.state.currentTime - contest.startTime) / contest.duration * 100;
        }
        return (
            <div id="page-contest">
                <Paper className="u-panel clearfix">
                    <h3>{contest.title}</h3>
                    <div className="text-info text-center clearfix">
                        <div className="pull-left">Current: {parseDateTime(this.state.currentTime)}</div>
                        <Status name={status[contest.statusId]}/>
                        <div className="pull-right">Contestants: ×{contest.attendsCount}</div>
                    </div>
                    <LinearProgress className="progress" value={percent} mode="determinate"/>
                </Paper>

                <Tabs className="box1" value={contestTab} onChange={this.handleTabChange}>
                    <Tab label="Overview" value='overview'/>
                    <Tab label="ProblemList" value="problems"/>
                    <Tab label="Status" value="status"/>
                    <Tab label="RankList" value="ranks"/>
                    <Tab label="Discuss" value="discuss"/>
                </Tabs>
                <Paper className="u-panel">
                    {/*pass props to child.
                     https://github.com/reactjs/react-router/blob/master/examples/passing-props-to-children/app.js*/}
                    {this.props.children && React.cloneElement(this.props.children, {
                        contest,
                        currentTime: this.state.currentTime
                    })}
                </Paper>
            </div>
        )
    }
}
/*

 */