import React from 'react';

import Paper from 'material-ui/Paper';


//import MyRawTheme from '../myRawTheme';
//import ThemeManager from 'material-ui/lib/styles/theme-manager';
//import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

import SignDialog from './dialogs/SignDialog';
import NavMenu from 'navbar/NavMenu';
import NavInfo from 'navbar/NavInfo';

import {initialize,openLoginDialog, switchTab} from '../actions';

import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

@connect(mapStateToProps, mapDispatchToProps)
//@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
export default class Layout extends React.Component {
    constructor(props) {
        props.initialize();
        super(props);
    }
    static propTypes = {
        user: React.PropTypes.object.isRequired,
        openLoginDialog: React.PropTypes.func.isRequired,
        currentTab: React.PropTypes.string.isRequired,
        switchTab: React.PropTypes.func.isRequired
    }

    render() {
        const {currentTab, switchTab, user, openLoginDialog}=this.props;
        return (
            <div>
                <Paper rounded={false} zDepth={1} className="m-navbar">
                    <div className="u-navinfo">
                        <div className="container">
                            <h1>Zhejiang Normal University Online Judge</h1>
                            <NavInfo user={user} openLoginDialog={openLoginDialog} />
                        </div>
                    </div>
                    <NavMenu currentTab={currentTab} switchTab={switchTab}/>
                </Paper>
                
                <div className="container content">
                    {this.props.children}
                </div>
                
                <Paper rounded={false} className="footer">
                    <span>Powered by ZJNU ACM Team ©2010-2015. Code licensed under the Apache License, Version 2.0. Design and Code by: <a
                        className="unstyle" href="#">Kevin Tan</a> | <a className="unstyle" href="#">Zhan HuangBin.</a></span>
                </Paper>
                <SignDialog />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        user: state.user,
        currentTab: state.currentTab
    }
}


function mapDispatchToProps(dispatch) {
    //bindActionCreators 接收单个action creator时，会直接返回对应的action，而mapDispatchToProps需要返回一个object才能与props合并的。于是它会自动执行这个函数。
    return bindActionCreators({
        openLoginDialog,
        switchTab,
        initialize
    }, dispatch);
}