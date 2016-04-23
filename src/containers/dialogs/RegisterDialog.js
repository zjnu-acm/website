/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {closeDialog} from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    static propTypes = {
        registerDialog: React.PropTypes.object.isRequired,
        closeDialog: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {value: 1};
    }

    onSubmit = ()=> {
        //this.props.userLogin(this.refs.username.getValue(), this.refs.password.getValue());
    }
    handleChange = (event, index, value) => this.setState({value});

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
        const style={
            column:{width:'50%',padding:'0 20px'}
        }
        const Hint = registerDialog.error.length > 0 ? <div className="text-danger">{registerDialog.error}</div> : '';
        return (
            <Dialog
                {...others}
                title="Register"
                actions={actions}
                modal={true}
                open={registerDialog.open}>
                {Hint}
                <div className="row">
                    <div className="pull-left" style={style.column}>
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
                    </div>
                    <div className="pull-right" style={style.column}>
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
    }, dispatch);
}
/*
 <Menu desktop={true} width={320}>
 <MenuItem primaryText="Single" insetChildren={true} />
 <MenuItem primaryText="1.15" insetChildren={true} />
 <MenuItem primaryText="Double" insetChildren={true} />
 <MenuItem
 primaryText="Custom: 1.2"
 checked={true}
 rightIcon={<ArrowDropRight />}
 menuItems={[
 <MenuItem
 primaryText="Show"
 rightIcon={<ArrowDropRight />}
 menuItems={[
 <MenuItem primaryText="Show Level 2" />,
 <MenuItem primaryText="Grid lines" checked={true} />,
 <MenuItem primaryText="Page breaks" insetChildren={true} />,
 <MenuItem primaryText="Rules" checked={true} />,
 ]}
 />,
 <MenuItem primaryText="Grid lines" checked={true} />,
 <MenuItem primaryText="Page breaks" insetChildren={true} />,
 <MenuItem primaryText="Rules" checked={true} />,
 ]}
 />
 <Divider />
 <MenuItem primaryText="Add space before paragraph" />
 <MenuItem primaryText="Add space after paragraph" />
 <Divider />
 <MenuItem primaryText="Custom spacing..." />
 </Menu>

 */