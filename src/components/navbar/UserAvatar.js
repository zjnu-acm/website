import React from 'react';
import styles from 'material-ui/lib/styles';

import Avatar from 'material-ui/lib/avatar';

import Popover from 'material-ui/lib/popover/popover';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import FlatButton from 'material-ui/lib/flat-button';

import Work from 'material-ui/lib/svg-icons/action/work';
import ExitToApp from 'material-ui/lib/svg-icons/action/exit-to-app'
const colors = styles.Colors;
export default class extends React.Component {
    state = {
        userMenuOpen: false
    }
    static propTypes = {
        user: React.PropTypes.object.isRequired
    }

    handleUserMenuOpen = (event)=> {
        this.setState({
            userMenuOpen: true,
            anchorEl: event.currentTarget
        })
    };

    handleUserMenuClose = ()=> {
        this.setState({
            userMenuOpen: false
        })
    };
    handleLogout = ()=> {

    };

    render() {
        const {user} = this.props;
        const colors = {
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

                    rippleColor={colors.hover}
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
                    onRequestClose={this.handleUserMenuClose}
                >
                    <div style={styles.popover}>
                        <List>
                            <ListItem
                                leftIcon={<Work />}
                                primaryText="Profile"/>
                            <ListItem
                                leftIcon={<ExitToApp />}
                                onTouchTap={this.handleUserMenuClose}
                                primaryText="Exit"/>
                        </List>
                    </div>
                </Popover>
            </div>
        )
    }
}