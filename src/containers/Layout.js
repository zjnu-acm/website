import React from 'react';

import Paper from 'material-ui/Paper';

import LoginDialog from './dialogs/Login';
import RegisterDialog from './dialogs/Register';
import HintDialog from './dialogs/Hint';
import ProcessDialog from './dialogs/Process';

import NavMenu from 'navbar/NavMenu';
import AppBar from 'navbar/AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import defaultTheme, {navTabTheme} from '../theme/defaultTheme';

export default class Layout extends React.Component {
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
                    <LoginDialog />
                    <RegisterDialog />
                    <HintDialog />
                    <ProcessDialog />
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