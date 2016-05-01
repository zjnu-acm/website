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
import {contestSubmitCode} from '../../actions/contest';
import {getLanguageList} from '../../actions/language';
import {Link} from 'react-router';

function mapStateToProps(state) {
    return {
        languages: state.languages
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        contestSubmitCode,
        getLanguageList
    }, dispatch);
}
@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    constructor(props) {
        super(props);
        const contestId = this.props.params.contestId;
        this.state = {
            codeText: '',
            languageId: 0
        }
        if (typeof props.languages[contestId] === 'undefined') {
            props.getLanguageList(contestId);
        } else {
            this.state.languageId = props.languages[contestId][0].languageId;
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
        contestSubmitCode(
            this.props.params.contestId,
            this.props.params.problemOrder,
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

        const {contestId, problemOrder} = this.props.params;
        const languages = this.props.languages[contestId]||[];
        return (
            <Paper style={style.paper}>
                <Toolbar>
                    <ToolbarGroup firstChild={false}>
                        <ToolbarTitle text="Problem:"/>
                        <Link style={style.pbLink}
                              to={`/contests/${contestId}/problems/${problemOrder}`}>{problemOrder}</Link>
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

 */