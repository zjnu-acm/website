/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class extends React.Component {
    static propTypes={
        currentTab:React.PropTypes.string.isRequired,
        switchTab:React.PropTypes.func.isRequired
    }
    render() {
        const {switchTab,currentTab}=this.props;
        return (
            <Tabs rounded={false} value={currentTab} onChange={switchTab}
                  className="container u-navmenu">
                <Tab value='home' label="Home"></Tab>
                <Tab value='problems' label="ProblemList"></Tab>
                <Tab value='status' label="Status"></Tab>
                <Tab value='ranks' label="RankList"></Tab>
                <Tab value='contests' label="Contest"></Tab>
                <Tab value='discuss' label="Discuss"></Tab>
                <Tab value='faq' label="FAQ"></Tab>
            </Tabs>
        )
    }
}