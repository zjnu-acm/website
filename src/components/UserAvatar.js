/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';
import styles from 'material-ui/lib/styles';

import Avatar from 'material-ui/lib/avatar';

import Popover from 'material-ui/lib/popover/popover';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import FlatButton from 'material-ui/lib/flat-button';


const colors = styles.Colors;
export default class extends React.Component {
    state = {
        userMenuOpen: false
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
        this.setState({
            userMenuOpen: false,
            isLogin: false
        })
    };

    render() {
        return (
            <div className="item" style={{marginTop:(88-56)/2+'px',marginLeft:'12px'}}>
                <FlatButton
                    onTouchTap={this.handleUserMenuOpen}
                    backgroundColor='rgba(0, 0, 0, 0.09)'
                    hoverColor={'rgba(0, 0, 0, 0.2)'}
                    rippleColor={'rgba(0,0,0,0.3)'}
                    style={{lineHeight:'56px',color:'#fff',padding:'0 12px'}}>
                    Kevin Tan
                    <Avatar backgroundColor={colors.teal400}
                            style={{display:'inline-block',verticalAlign:'middle',marginTop:'-4px',marginLeft:'16px'}}>
                        K
                    </Avatar>

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
                            <ListItem primaryText="the first Message"/>
                            <ListItem primaryText="the second Message"/>
                            <ListItem primaryText="the last Message"/>
                        </List>
                        <Divider />
                        <FlatButton onTouchTap={this.handleLogout} label="Exit"
                                    style={{width:'100%',height:'50px',color:colors.red300}}/>
                    </div>
                </Popover>
            </div>
        )
    }
}