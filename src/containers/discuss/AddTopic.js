/**
 * Created by kevin on 16-5-3.
 */
import React from 'react';
import {browserHistory} from 'react-router';
import ReactQuill  from 'react-quill';
import '../../styles/quill.snow.scss';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    onTextChange = (value)=> {
        this.setState({text: value});
    }
    onSubmit = ()=>{
        browserHistory.push('/discuss');
    }
    render() {
        const style={
            title:{marginBottom:'20px'},
            content:{border:'1px solid #ddd',height:'400px',marginBottom:'40px'}
        }
        return (
            <Paper className="u-panel">
                <Toolbar className="panel-head">
                    <ToolbarGroup firstChild={false}>
                        <ToolbarTitle text="Add Topic"/>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarSeparator />
                        <RaisedButton label="Submit" primary={true} onTouchTap={this.onSubmit}/>
                    </ToolbarGroup>
                </Toolbar>
                 <TextField style={style.title}hintText="Title"/>
                <ReactQuill style={style.content}theme="snow" value={this.state.text} onChange={this.onTextChange}/>
            </Paper>
        )
    }
}