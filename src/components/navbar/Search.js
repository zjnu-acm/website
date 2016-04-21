/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';

import IconButton from 'material-ui/lib/icon-button';

import TextField from 'material-ui/lib/text-field';
import SearchIcon from 'material-ui/lib/svg-icons/action/search';
import ClearIcon from 'material-ui/lib/svg-icons/content/clear';


export default class extends React.Component{
    state={
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
    render(){
        return (
            <div>
                <div>
                    <IconButton onTouchTap={this.handleSearchClick}><SearchIcon /></IconButton>
                </div>
                <div style={{display:this.state.searchOpen?'inline-block':'none'}}>
                    <div className="item">
                        <TextField
                            ref="input"
                            inputStyle={{color:"#fff",paddingRight:'48px'}}
                            hintStyle={{color:'rgba(255, 255, 255, 0.53)'}}
                            underlineStyle={{borderColor:'rgba(255, 255, 255, 0.53)'}}
                            underlineFocusStyle={{borderColor:'#fff'}}
                            hintText="Enter Problem Id..."
                        />
                    </div>
                    <div className="item">
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