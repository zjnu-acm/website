/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';
import {browserHistory} from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {switchTab} from '../../actions/tab';

@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    static propTypes = {
        headTab: React.PropTypes.string.isRequired,
        switchTab: React.PropTypes.func.isRequired
    }
    handleChange = (value)=> {
        this.props.switchTab(value);
        browserHistory.push('/'+value);
    }

    render() {
        const {headTab}=this.props;
        return (
            <Tabs value={headTab} onChange={this.handleChange}
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
        headTab: state.navTab.head
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        switchTab
    }, dispatch)
}