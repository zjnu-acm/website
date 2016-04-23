/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';

import IconButton from 'material-ui/IconButton';

import PersonIcon from 'material-ui/svg-icons/social/person';

import TranslateIcon from 'material-ui/svg-icons/action/translate';

import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import Search from './Search';
import Notifications from './Notifications';
import UserAvatar from './UserAvatar';
import PersonAddIcon from 'material-ui/svg-icons/social/person-add';
import NearMeIcon from 'material-ui/svg-icons/maps/near-me';
import muiThemeable from 'material-ui/styles/muiThemeable';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {openDialog,userLogout} from '../../actions';
import {autoHideNavBar} from '../../utils';



@muiThemeable()
@connect(mapStateToProps,mapDispatchToProps)
export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }
    componentDidMount = ()=> {
        autoHideNavBar();
    };
    static propTypes = {
        openDialog: React.PropTypes.func.isRequired,
        userLogout:React.PropTypes.func.isRequired,
        user: React.PropTypes.object.isRequired,
        muiTheme:React.PropTypes.object.isRequired
    };
    handleTouchTap = (event) => {
        event.preventDefault();
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };
    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };
    handleItemTouchTap = (event, menuItem)=> {
        const value = menuItem.props.value;
        this.handleRequestClose();
        switch (value) {
            case 'login':
                //logout!
                logger('appbar','got login');
                this.props.openDialog('login');
                break;
            case 'register':
                logger('appbar','got register');
                this.props.openDialog('register');
                break;
        }
    };
    render() {
        const {user, userLogout, muiTheme} = this.props;
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
                <IconButton onTouchTap={this.handleTouchTap}><PersonIcon/></IconButton>
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                >
                    <Menu onItemTouchTap={this.handleItemTouchTap}>
                        <MenuItem value='register' primaryText="Register" leftIcon={<PersonAddIcon />} />
                        <MenuItem value='login' primaryText="Login" leftIcon={<NearMeIcon />}/>
                        
                    </Menu>
                </Popover>
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
        openDialog,
        userLogout
    },dispatch)
}