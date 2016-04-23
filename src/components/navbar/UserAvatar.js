import React from 'react';
import * as colors from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';

import Popover from 'material-ui/Popover';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import FlatButton from 'material-ui/FlatButton';

import WorkIcon from 'material-ui/svg-icons/action/work';
import ExitToAppIcon  from 'material-ui/svg-icons/action/exit-to-app'

export default class extends React.Component {
    state = {
        userMenuOpen: false
    }
    static propTypes = {
        userLogout: React.PropTypes.func.isRequired,
        user: React.PropTypes.object.isRequired
    }

    handleUserMenuOpen = (event)=> {
        this.setState({
            userMenuOpen: true,
            anchorEl: event.currentTarget
        })
    };

    CloseMenu = ()=> {
        this.setState({
            userMenuOpen: false
        })
    };
    handleItemTouchTap = (event, menuItem, index)=> {
        const value = menuItem.props.value;
        this.CloseMenu();
        switch (value) {
            case 'exit':
                //logout!
                this.props.userLogout();
                break;
        }
    };

    render() {
        const {user} = this.props;
        const bgcolors = {
            //normal: 'rgba(0, 0, 0, 0.09)',
            hover: 'rgba(0, 0, 0, 0.2)',
            ripple: 'rgba(0,0,0,0.3)'
        }
        const Style = {
            lineHeight: '48px',
            color: '#fff',
            paddingLeft: '12px',
            paddingRight: '12px'
        }
        const AvatarStyle = {
            display: 'inline-block',
            verticalAlign: 'middle',
            marginTop: '-4px',
            marginRight: '16px'
        }

        return (
            <div>
                <FlatButton
                    onTouchTap={this.handleUserMenuOpen}
                    //backgroundColor={colors.normal}
                    //hoverColor={colors.normal}
                    rippleColor={bgcolors.hover}
                    style={Style}>
                    <Avatar backgroundColor={colors.teal400}
                            style={AvatarStyle}
                            src={user.avatarUrl}
                    />
                    {user.nickname}
                </FlatButton>
                <Popover
                    open={this.state.userMenuOpen}
                    animated={false}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'middle', vertical: 'top'}}
                    onRequestClose={this.CloseMenu}
                >

                    <Menu onItemTouchTap={this.handleItemTouchTap}>
                        <MenuItem value='profile' primaryText="Profile" leftIcon={<WorkIcon/>}/>
                        <MenuItem value='exit' primaryText="Exit" leftIcon={<ExitToAppIcon />}/>
                    </Menu>
                </Popover>
            </div>
        )
    }
}