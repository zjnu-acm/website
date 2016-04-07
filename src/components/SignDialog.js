/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
export default class extends React.Component{
    state={
        dialogOpen: false
    }
    handleDialogClose = ()=> {
        this.setState({
            dialogOpen: false
        })
    };
    handleDialogOpen = ()=> {
        this.setState({
            dialogOpen: true
        })
    };
    handleLoginSuccess = ()=> {
        this.handleDialogClose();
    };
    render(){
        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onTouchTap={this.handleDialogClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={this.handleLoginSuccess}
            />,
        ];
        return (
            <Dialog
                title="Login"
                actions={actions}
                modal={true}
                open={this.state.dialogOpen}>
                something...
            </Dialog>
        )
    }
}