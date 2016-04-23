/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import {closeLoginDialog, userLogin} from '../../actions';
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
        console.log(this.refs.remember);
        this.props.userLogin(this.refs.username.getValue(), this.refs.password.getValue(), this.refs.remember.state.switched);

    }
    onKeyDown = (event)=> {
        if (event.which === 13) {
            this.onSubmit();
        }
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
        const style = {
            block: {
                width: '150px',
                margin: "20px 0"
            }
        };
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
                    fullWidth={true}
                    hintText="Your Student ID"
                    ref="username"
                    floatingLabelText="Username"
                />
                <TextField
                    fullWidth={true}
                    onKeyDown={this.onKeyDown}
                    hintText="Your Password"
                    ref="password"
                    floatingLabelText="Password"
                    type="password"
                />
                <div style={style.block}>
                    <Toggle
                        ref="remember"
                        label="Remember"
                    />
                </div>
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