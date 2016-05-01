/**
 * Created by kevin on 16-4-23.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';

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
        const style = {
            circle:{
                verticalAlign:'middle'
            },
            text:{
                verticalAlign:'middle',
                marginLeft:'1em'
            }
        }
        return (
            <Dialog
                open={dialog.open}
                modal={true}
                onRequestClose={closeDialog}>
                <CircularProgress style={style.circle}/>
                <span className="hint-text" style={style.text}>{dialog.error||'Processing...'}</span>
            </Dialog>
        )
    }
}

function mapStateToProps(state) {
    return {
        dialog: state.dialogs.process
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        closeDialog: closeDialog.bind(this, 'process'),
    }, dispatch);
}