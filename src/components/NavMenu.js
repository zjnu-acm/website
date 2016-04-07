/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';

import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

import {browserHistory} from 'react-router';

export default class extends React.Component {
    state = {
        value: window.location.pathname.substr(1)
    }
    handleTabChange = (value)=> {
        this.setState({
            value
        });
        browserHistory.push('/' + value);
    };

    render() {
        return (
            <Tabs rounded={false} value={this.state.value} onChange={this.handleTabChange}
                  className="container u-navmenu">
                <Tab value='Home' label="Home"></Tab>
                <Tab value='ProblemList' label="ProblemList"></Tab>
                <Tab value='Status' label="Status"></Tab>
                <Tab value='RankList' label="RankList"></Tab>
                <Tab value='Contest' label="Contest"></Tab>
                <Tab value='Discuss' label="Discuss"></Tab>
                <Tab value='FAQ' label="FAQ"></Tab>
            </Tabs>
        )
    }
}