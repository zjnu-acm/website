import React from 'react';

import Paper from 'material-ui/Paper';

import SignDialog from './dialogs/SignDialog';
import RegisterDialog from './dialogs/RegisterDialog';
import NavMenu from 'navbar/NavMenu';
import AppBar from 'navbar/AppBar';

import {initialize} from '../actions';

import {connect} from 'react-redux';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import defaultTheme, {navTabTheme} from '../theme/defaultTheme';

@connect()
export default class Layout extends React.Component {
    constructor(props) {
        props.dispatch(initialize());//初始化
        super(props);
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={defaultTheme}>
                <div>
                    {/* head */}
                    <Paper rounded={false} className="navbar">
                        <AppBar/>
                        <MuiThemeProvider muiTheme={navTabTheme}>
                            <NavMenu className='navbar-menu' />
                        </MuiThemeProvider>
                    </Paper>
                    {/* body */}
                    <div className="container content">
                        {this.props.children}
                    </div>
                    
                    {/* foot */}
                    <Paper rounded={false} className="footer">
                    <span>Powered by ZJNU ACM Team ©2010-2015. Code licensed under the Apache License, Version 2.0. Design and Code by: <a
                        className="unstyle" href="#">Kevin Tan</a> | <a className="unstyle" href="#">Zhan HuangBin.</a></span>
                    </Paper>
                    
                    {/* float */}
                    <SignDialog />
                    <RegisterDialog />
                </div>
            </MuiThemeProvider>
        )
    }
}

// function mapDispatchToProps(dispatch) {
//     //bindActionCreators 接收单个action creator时，会直接返回对应的action，而mapDispatchToProps需要返回一个object才能与props合并的。于是它会自动执行这个函数。
//     return bindActionCreators({
//         initialize
//     }, dispatch);
// }