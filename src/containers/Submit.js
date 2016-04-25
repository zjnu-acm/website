/**
 * Created by kevin on 16-4-24.
 */
import React from 'react';

import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import {connect} from 'react-redux';
import {submitCode} from '../actions';

import {Link} from 'react-router';

@connect()
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeText: '',
            langText: 1,
        }
    }

    static propTypes = {
        // problem: React.PropTypes.object.isRequired,
        // getProblemDetail: React.PropTypes.func.isRequired
    }
    componentDidMount = ()=> {
        this.refs.code.focus();
    }
    handleChange = (e, index, value)=> {
        this.setState({
            langText: value
        })
    }
    handleCodeChange = (e)=> {
        this.setState({
            codeText: e.target.value
        })
    }
    onSubmit = ()=> {
        const action = submitCode(this.props.params.problemId, this.state.langText, this.state.codeText)
        this.props.dispatch(action);
    }

    render() {
        const style = {
            pbLink: {
                paddingRight: '16px',
                lineHeight: '56px',
                fontSize: '20px'
            },
            paper: {
                marginTop: '60px'
            },
            dropdown: {
                width: '150px'
            }
        }

        const problemId = this.props.params.problemId;

        return (

            <Paper style={style.paper}>
                <Toolbar>
                    <ToolbarGroup firstChild={false}>
                        <ToolbarTitle text="Problem:"/>
                        <Link style={style.pbLink} to={"/problems/" + problemId}>{problemId}</Link>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarTitle text="Language:"/>
                        <DropDownMenu autoWidth={false} style={style.dropdown} value={this.state.langText}
                                      onChange={this.handleChange}>
                            <MenuItem value={1} primaryText="GNU C++"/>
                            <MenuItem value={2} primaryText="GNU C"/>
                            <MenuItem value={3} primaryText="Pascal"/>
                            <MenuItem value={4} primaryText="Java"/>
                            <MenuItem value={5} primaryText="VC++"/>
                            <MenuItem value={6} primaryText="GNU C++11"/>
                        </DropDownMenu>
                        <ToolbarSeparator />
                        <RaisedButton label="Submit" primary={true} onTouchTap={this.onSubmit}/>
                    </ToolbarGroup>
                </Toolbar>
                <textarea className='codeArea' ref="code" value={this.state.codeText}
                          onChange={this.handleCodeChange}></textarea>

            </Paper>

        )
    }
}
/*

 */