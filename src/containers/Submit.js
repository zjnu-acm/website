/**
 * Created by kevin on 16-4-24.
 */
import React from 'react';
import {bindActionCreators} from 'redux';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import {connect} from 'react-redux';
import {submitCode} from '../actions/problem';
import {getLanguageList} from '../actions/language';

import {Link} from 'react-router';
function mapStateToProps(state) {
    return {
        languages: state.languages
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        submitCode,
        getLanguageList
    }, dispatch);
}
@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeText: '',
            languageId:0
        }
        if (typeof props.languages.all === 'undefined') {
            props.getLanguageList();
        } else {
            logger(props.languages);
            this.state.languageId = props.languages.all[0].languageId;
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
            languageId: value
        })
    }
    handleCodeChange = (e)=> {
        this.setState({
            codeText: e.target.value
        })
    }
    onSubmit = ()=> {
        submitCode(
            this.props.params.problemId,
            this.state.languageId,
            this.state.codeText);
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
        const languages = this.props.languages.all || [];
        return (
            <Paper style={style.paper}>
                <Toolbar>
                    <ToolbarGroup firstChild={false}>
                        <ToolbarTitle text="Problem:"/>
                        <Link style={style.pbLink} to={"/problems/" + problemId}>{problemId}</Link>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarTitle text="Language:"/>
                        <DropDownMenu autoWidth={false} style={style.dropdown} value={this.state.languageId}
                                      onChange={this.handleChange}>
                            {languages.map(lang=><MenuItem key={lang.languageId} value={lang.languageId} primaryText={lang.name}/>)}
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
 <MenuItem value={1} primaryText="GNU C++"/>
 <MenuItem value={2} primaryText="GNU C"/>
 <MenuItem value={3} primaryText="Pascal"/>
 <MenuItem value={4} primaryText="Java"/>
 <MenuItem value={5} primaryText="VC++"/>
 <MenuItem value={6} primaryText="GNU C++11"/>
 */