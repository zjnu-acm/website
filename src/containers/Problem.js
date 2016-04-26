/**
 * Created by kevin on 16-4-4.
 */
import React from 'react';

import Paper from 'material-ui/Paper';

import  RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {getProblemDetail} from '../actions';

import {bindActionCreators} from 'redux';

import {browserHistory} from 'react-router';

@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {
    constructor(props) {
        super(props);
        props.getProblemDetail(props.params.problemId);
    }

    static propTypes = {
        problem: React.PropTypes.object.isRequired,
        getProblemDetail: React.PropTypes.func.isRequired
    }
    onSubmit = () =>{
        browserHistory.push(`/problems/${this.props.params.problemId}/submit`);
    }
    render() {
        //sample data
        const {problem} = this.props;
        return (
            <div className="problem">
                <Paper className="u-panel pb-content">
                    <div className="pb-head">
                        <h1 className="title">{problem.title}</h1>
                        <ul className="list-inline info">
                            <li><b>TimeLimit</b>:{problem.timelimit.others}/{problem.timelimit.java}(Java)</li>
                            <li><b>MemoryLimit</b>:{problem.memorylimit.others}/{problem.memorylimit.java}(Java)</li>
                            <li><b>Submit</b>:{problem.static.submit}</li>
                            <li><b>Accepted</b>:{problem.static.ac}</li>
                        </ul>
                    </div>
                    <div style={{display:problem.description?'block':'none'}} className="pb-block">
                        <h2 className="title">Description</h2>
                        <div className='detail'>
                            <span dangerouslySetInnerHTML={{__html: problem.description}}/>
                        </div>
                    </div>
                    <div style={{display:problem.input?'block':'none'}} className="pb-block">
                        <h2 className="title">Input</h2>
                        <div className="detail">
                            {problem.input}
                        </div>
                    </div>
                    <div style={{display:problem.output?'block':'none'}} className="pb-block">
                        <h2 className="title">Output</h2>
                        <div className="detail">
                            {problem.output}
                        </div>
                    </div>
                    <div style={{display:problem.sampleInput?'block':'none'}} className="pb-block">
                        <h2 className="title">Sample Input</h2>
                        <pre className="detail code">{problem.sampleInput}</pre>
                    </div>
                    < div style={{display:problem.sampleOutput?'block':'none'}} className="pb-block">
                        <h2 className="title">Sample Output</h2>
                        <pre className="detail code">{problem.sampleOutput}</pre>
                    </div>
                    <div style={{display:problem.hint?'block':'none'}} className="pb-block">
                        <h2 className="title">Hint</h2>
                        <div className="detail text-danger">{problem.hint}</div>
                    </div>
                    <div style={{display:problem.source?'block':'none'}} className="pb-block">
                        <h2 className="title">Source</h2>
                        <i className="detail">{problem.source}</i>
                    </div>
                </Paper>
                <div className="u-panel pb-footer">
                    <RaisedButton
                        className="pb-btn-submit"
                        label="Submit"
                        primary={true}
                        onTouchTap={this.onSubmit}
                    />
                    <RaisedButton
                        className="pb-btn-status"
                        label="Status"
                        secondary={true}
                    />
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        problem: state.problem
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getProblemDetail
    }, dispatch);
}