import React from 'react';

import Paper from 'material-ui/lib/paper';


import MyRawTheme from '../myRawTheme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

import SignDialog from './SignDialog';
import NavMenu from '../components/NavMenu';
import NavInfo from '../components/NavInfo';

import {openLoginDialog} from '../actions';

import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';


@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    
    static propTypes={
        user:React.PropTypes.object.isRequired,
        openLoginDialog:React.PropTypes.func.isRequired,
    }
    
    render() {
        console.log(this.props);
        const {user,openLoginDialog}=this.props;
        return (
            <div className="body-wrapper">
                <Paper rounded={false} zDepth={1} className="m-navbar">
                    <NavInfo user={user} openLoginDialog={openLoginDialog}/>
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


function mapStateToProps(state) {
    return {
        user: state.user
    }
}


function mapDispatchToProps(dispatch) {
    console.log(openLoginDialog);
    //bindActionCreators 接收单个action creator时，会直接返回对应的action，而mapDispatchToProps需要返回一个object才能与props合并的。于是它会自动执行这个函数。
    return  bindActionCreators({openLoginDialog}, dispatch);;
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);