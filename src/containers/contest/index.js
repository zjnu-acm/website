/**
 * Created by kevin on 16-4-4.
 */
import React from 'react';

import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class extends React.Component {
    render() {
        console.log('id',this.props.params.id);
        return (
            <div id="page-contest">
                <Paper className="u-panel clearfix">
                    <h3>第九届浙江师范大学程序设计竞赛</h3>
                    <div className="text-info text-center clearfix">
                        <div className="pull-left">Penalty: 20 minutes</div>
                        <span >Running</span>
                        <div className="pull-right">Contestants: ×129</div>
                    </div>
                    <LinearProgress  className="progress" value={30}  mode="determinate" />

                </Paper>

                <Tabs className="box1">
                    <Tab label="Overview" value="a" />
                    <Tab label="Problem" value="b" />
                    <Tab label="Status" />
                    <Tab label="Rank"/>
                    <Tab label="Discuss" />
                </Tabs>
                <Paper className="u-panel">
                    {this.props.children}
                </Paper>
            </div>
        )
    }
}