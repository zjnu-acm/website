/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';

import styles from 'material-ui/lib/styles';
import Badge from '../../../node_modules/material-ui/lib/badge'
import NotificationsIcon from '../../../node_modules/material-ui/lib/svg-icons/social/notifications';

import Popover from '../../../node_modules/material-ui/lib/popover/popover';

import List from '../../../node_modules/material-ui/lib/lists/list';
import ListItem from '../../../node_modules/material-ui/lib/lists/list-item';

import Divider from '../../../node_modules/material-ui/lib/divider';

import IconButton from '../../../node_modules/material-ui/lib/icon-button';
import FlatButton from '../../../node_modules/material-ui/lib/flat-button';

const colors = styles.Colors;
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
                </Popover>
            </Badge>
        )
    }
}