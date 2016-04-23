/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {tabSwitch} from '../../actions';
@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    static propTypes = {
        currentTab: React.PropTypes.string.isRequired,
        tabSwitch: React.PropTypes.func.isRequired
    }
    render() {
        const {tabSwitch, currentTab}=this.props;
        return (
            <Tabs value={currentTab} onChange={tabSwitch}
                  tabItemContainerStyle={{height:'48px'}}
                  className="container">
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
function mapStateToProps(state) {
    return {
        currentTab: state.currentTab
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        tabSwitch
    }, dispatch)
}