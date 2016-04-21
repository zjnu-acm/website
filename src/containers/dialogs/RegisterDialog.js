/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import {closeLoginDialog, userLogin} from 'actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    static propTypes = {
        loginDialog: React.PropTypes.object.isRequired,
        closeLoginDialog: React.PropTypes.func.isRequired,
        userLogin: React.PropTypes.func.isRequired
    }
    onSubmit = ()=> {

        this.props.userLogin(this.refs.username.getValue(), this.refs.password.getValue());
    }

    render() {
        const {closeLoginDialog, loginDialog, ...others} = this.props;
        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onTouchTap={closeLoginDialog}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={this.onSubmit}
            />,
        ];
        const Hint = loginDialog.error.length > 0 ? <div className="text-danger">{loginDialog.error}</div> : '';
        return (
            <Dialog
                {...others}
                title="Login"
                actions={actions}
                modal={true}
                open={loginDialog.open}>
                {Hint}
                <TextField
                    style={{width:'100%'}}
                    hintText="Your Student ID"
                    ref="username"
                    floatingLabelText="Username"
                /><br/>
                <TextField
                    style={{width:'100%'}}
                    onEnterKeyDown={this.onSubmit}
                    hintText="Your Password"
                    ref="password"
                    floatingLabelText="Password"
                    type="password"
                /><br/>
            </Dialog>
        )
    }
}
function mapStateToProps(state) {
    return {
        loginDialog: state.loginDialog
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        closeLoginDialog,
        userLogin
    }, dispatch);
}