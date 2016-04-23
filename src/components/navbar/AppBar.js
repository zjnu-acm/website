/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';

import IconButton from 'material-ui/IconButton';

import PersonIcon from 'material-ui/svg-icons/social/person';

import TranslateIcon from 'material-ui/svg-icons/action/translate';

import Search from './Search';
import Notifications from './Notifications';
import UserAvatar from './UserAvatar';

import muiThemeable from 'material-ui/styles/muiThemeable';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {openLoginDialog,userLogout} from '../../actions';
import {autoHideNavBar} from '../../utils';

@muiThemeable()
@connect(mapStateToProps,mapDispatchToProps)
export default class extends React.Component {
    componentDidMount = ()=> {
        autoHideNavBar();
    };
    static propTypes = {
        openLoginDialog: React.PropTypes.func.isRequired,
        userLogout:React.PropTypes.func.isRequired,
        user: React.PropTypes.object.isRequired,
        muiTheme:React.PropTypes.object.isRequired
    };
    render() {
        const {user, userLogout,openLoginDialog, muiTheme} = this.props;
        const style = {
            head: {
                backgroundColor: muiTheme.palette.primary1Color
            }
        }
        const UserMenu = user.logged ? [
            <li key="notification">
                <Notifications />
            </li>,
            <li key="useravatar">
                <UserAvatar user={user} userLogout={userLogout}/>
            </li>
        ] : [
            <li key="person">
                <IconButton onTouchTap={openLoginDialog}><PersonIcon/></IconButton>
            </li>
        ]
        return (
            <div className="appbar" style={style.head}>
                <div className="container">
                    <h1 className="appbar-title">Zhejiang Normal University Online Judge</h1>
                    <ul className="appbar-menu">
                        <li>
                            <Search />
                        </li>
                        <li>
                            <IconButton>
                                <TranslateIcon />
                            </IconButton>
                        </li>
                        {UserMenu}
                    </ul>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        user:state.user
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        openLoginDialog,
        userLogout
    },dispatch)
}