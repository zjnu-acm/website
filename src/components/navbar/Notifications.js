/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';

import styles from 'material-ui/styles';
import * as colors from 'material-ui/styles/colors'
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

import Popover from 'material-ui/Popover';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import Divider from 'material-ui/Divider';

import IconButton from 'material-ui/IconButton';

export default class extends React.Component {
    state = {
        open: false
    }

    handleTouchTap = (event) => {
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

    render() {
        const badgeStyle = {
            background: colors.deepOrange500,
            color: '#fff',
            top: '0px',
            right: '0',
            textAlign: 'center'
        }
        return (
            <Badge badgeContent={5}
                   style={{padding:'0'}}
                   badgeStyle={badgeStyle}>
                <IconButton onTouchTap={this.handleTouchTap}>
                    <NotificationsIcon />
                </IconButton>
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'middle', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                >
                   <Menu>
                       <MenuItem primaryText="Bill Has Relyed to you"/>
                       <MenuItem primaryText="Job news"/>
                       <Divider/>
                       <MenuItem
                           style={{color:colors.deepOrange500}}
                           primaryText="clear all notifications"/>
                   </Menu>
                </Popover>
            </Badge>
        )
    }
}
/*
 <div style={styles.popover}>
 <List subheader="system notifications">
 <ListItem primaryText="the first Message"/>
 <ListItem primaryText="the second Message"/>
 <ListItem primaryText="the last Message"/>
 </List>
 <Divider />
 <List subheader="user notifications">
 <ListItem primaryText="the first Message"/>
 </List>
 <Divider />
 <FlatButton label="clear all notifications"
 style={{width:'100%',height:'50px',color:colors.deepOrange500}}/>
 </div>
 */