import React from 'react';

import Paper from 'material-ui/lib/paper';


import MyRawTheme from '../myRawTheme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

import SignDialog from '../components/SignDialog';
import NavMenu from '../components/NavMenu';
import NavInfo from '../components/NavInfo';


@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            //min-height child height bug of webkit: http://stackoverflow.com/questions/8468066/child-inside-parent-with-min-height-100-not-inheriting-height
            <div className="body-wrapper">
                <Paper rounded={false} zDepth={1} className="m-navbar">
                    <NavInfo/>
                    <NavMenu />
                </Paper>
                {this.props.children}
                <Paper rounded={false} className="footer">
                    <span>Powered by ZJNU ACM Team ©2010-2015. Code licensed under the Apache License, Version 2.0. Design and Code by: <a className="unstyle" href="#">Kevin Tan</a> | <a className="unstyle" href="#">Zhan HuangBin.</a></span>
                </Paper>
                <SignDialog />
            </div>
        )
    }
}
