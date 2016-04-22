/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';

import IconButton from 'material-ui/IconButton';

import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import ClearIcon from 'material-ui/svg-icons/content/clear';


export default class extends React.Component {
    state = {
        searchOpen: false
    }
    handleSearchClick = ()=> {
        this.setState({
            searchOpen: true
        });
        //focus to input
        this.refs.input.focus();
    };
    handleSearchClose = ()=> {
        this.setState({
            searchOpen: false
        })
    };

    render() {
        return (
            <div className="search-group">
                <div className="search-toggle">
                    <IconButton onTouchTap={this.handleSearchClick}><SearchIcon /></IconButton>
                </div>
                <div clasName="search-body" style={{display:this.state.searchOpen?'inline-block':'none'}}>
                        <TextField
                            ref="input"
                            inputStyle={{color:"#fff",paddingRight:'48px'}}
                            hintStyle={{color:'rgba(255, 255, 255, 0.53)'}}
                            underlineStyle={{borderColor:'rgba(255, 255, 255, 0.53)'}}
                            underlineFocusStyle={{borderColor:'#fff'}}
                            hintText="Enter Problem Id..."
                        />
                    <div className="search-clear">
                        <IconButton
                            onTouchTap={this.handleSearchClose}
                            style={{marginLeft:'-48px'}}
                        ><ClearIcon/></IconButton>
                    </div>
                </div>
            </div>
        )
    }
}