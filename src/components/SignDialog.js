/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
export default class extends React.Component {
    static propTypes = {
        dialogOpen: React.PropTypes.bool.isRequired,
        closeLoginDialog: React.PropTypes.func.isRequired,
    }

    render() {
        const {closeLoginDialog,onSubmit, dialogOpen, ...others} = this.props;
        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onTouchTap={closeLoginDialog}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={onSubmit}
            />,
        ];
        return (
            <Dialog
                {...others}
                title="Login"
                actions={actions}
                modal={true}
                open={dialogOpen}>
                something...
            </Dialog>
        )
    }
}