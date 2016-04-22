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

import {autoHideNavBar} from '../../utils';

@muiThemeable()
export default class NavInfo extends React.Component {
    componentDidMount = ()=> {
        autoHideNavBar();
    };
    static propTypes = {
        openLoginDialog: React.PropTypes.func.isRequired,
        user: React.PropTypes.object.isRequired
    };

    render() {
        const {user, openLoginDialog,muiTheme} = this.props;
        const style = {
            head:{
                backgroundColor:muiTheme.palette.primary1Color
            }
        }
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
                        <li style={{display:user.logged?'block':'none'}}>
                            <Notifications />
                        </li>

                        <li style={{display:user.logged?'block':'none'}}>
                            <UserAvatar user={user}/>
                        </li>

                        <li style={{display:!user.logged?'block':'none'}}>
                            <IconButton onTouchTap={openLoginDialog}><PersonIcon/></IconButton>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}