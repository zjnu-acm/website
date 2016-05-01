/**
 * Created by kevin on 16-4-23.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import {closeDialog} from '../../actions/dialog';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    static propTypes = {
        dialog: React.PropTypes.object.isRequired,
        closeDialog: React.PropTypes.func.isRequired,
    }

    render() {
        const {dialog,closeDialog} = this.props;
        return (
            <Dialog
                open={dialog.open}
                onRequestClose={closeDialog}>
                <div className="hint-text">{dialog.error}</div>
            </Dialog>
        )
    }
}

function mapStateToProps(state) {
    return {
        dialog: state.dialogs.hint
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        closeDialog: closeDialog.bind(this, 'hint'),
    }, dispatch);
}