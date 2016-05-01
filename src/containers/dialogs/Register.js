/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dropzone from 'react-dropzone';
import {closeDialog} from '../../actions/dialog';
import {register} from '../../actions/account';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    static propTypes = {
        registerDialog: React.PropTypes.object.isRequired,
        closeDialog: React.PropTypes.func.isRequired,
        register: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
    }

    onSubmit = ()=> {
        this.props.register({
            userId: this.refs.username.getValue(),
            password: this.refs.password.getValue(),
            email: this.refs.email.getValue(),
            nickname: this.refs.nickname.getValue(),
            classname: this.refs.classname.getValue(),
            avatar: this.state.files.length ? this.state.files[0] : undefined
        });
    }
    onDrop = (files)=> {
        this.setState({
            files: files
        });
    }
    onOpenClick = ()=> {
        console.log(this.refs);
        this.refs.dropzone.open();
    }

    render() {
        const {closeDialog, registerDialog, ...others} = this.props;
        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onTouchTap={closeDialog}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={this.onSubmit}
            />,
        ];
        const style = {
            column: {width: '50%', padding: '0 20px'},
            button: {
                marginTop: '27px',
                marginBottom: '37px'
            },
            dropzone: {
                display: 'none'
            }
        }

        const Hint = registerDialog.error.length > 0 ? <div className="text-danger">{registerDialog.error}</div> : '';

        const preview = this.state.files.map((file, index) =>
            <div key={index} className="img" style={{backgroundImage:`url(${file.preview})`}}/>);
        return (
            <Dialog
                {...others}
                title="Register"
                actions={actions}
                onRequestClose={closeDialog}
                open={registerDialog.open}>
                {Hint}
                <div className="row">
                    <div className="pull-left" style={style.column}>
                        <RaisedButton onTouchTap={this.onOpenClick} label="Upload Your Avatar" primary={true}
                                      style={style.button}/>
                        <Dropzone style={style.dropzone} ref="dropzone" multiple={false} onDrop={this.onDrop}/>
                        <div className="preview">{preview} </div>
                    </div>
                    <div className="pull-right" style={style.column}>
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
                        <TextField
                            fullWidth={true}
                            onKeyDown={this.onKeyDown}
                            hintText="Repeat Password"
                            ref="repeatPassword"
                            floatingLabelText="Repeat Password"
                            type="password"
                        />
                        <TextField
                            fullWidth={true}
                            hintText="Your nickname"
                            ref="nickname"
                            floatingLabelText="Nickname"
                        />
                        <TextField
                            fullWidth={true}
                            hintText="Your Major&Class"
                            ref="classname"
                            floatingLabelText="Major&Class"
                        />
                        <TextField
                            fullWidth={true}
                            hintText="Your Email"
                            ref="email"
                            floatingLabelText="Email"
                        />
                    </div>

                </div>
            </Dialog>
        )
    }
}
function mapStateToProps(state) {
    return {
        registerDialog: state.dialogs.register
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        closeDialog: closeDialog.bind(this, 'register'),
        register
    }, dispatch);
}