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

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

@connect(mapStateToProps, mapDispatchToProps)
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
            <MuiThemeProvider muiTheme={lightMuiTheme}>
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
            </MuiThemeProvider>
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