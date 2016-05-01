import React from 'react';
import * as colors from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';

import Popover from 'material-ui/Popover';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';

import WorkIcon from 'material-ui/svg-icons/action/work';
import ExitToAppIcon  from 'material-ui/svg-icons/action/exit-to-app'

export default class extends React.Component {
    state = {
        userMenuOpen: false
    }
    static propTypes = {
        logout: React.PropTypes.func.isRequired,
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
                this.props.logout();
                break;
        }
    };

    render() {
        const {user} = this.props;
        const style ={
            listItem:{
                color:'#fff'
            },
            avatar:{
                backgroundColor:colors.blue500
            }
        }


        return (
            <div>
                <ListItem
                    onTouchTap={this.handleUserMenuOpen}
                    primaryText= {user.nickname}
                    style={style.listItem}
                    leftAvatar={
                    user.avatarUrl?<Avatar src={user.avatarUrl} />:
                    <Avatar style={style.avatar}>{user.nickname[0]}</Avatar>
                    }
                />

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