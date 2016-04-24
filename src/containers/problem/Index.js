/**
 * Created by kevin on 16-4-24.
 */
import React from 'react';

import Paper from 'material-ui/Paper';

export default class extends React.Component {
    render() {
        return (
            <Paper>{this.props.params.problemId}</Paper>
        )
    }
}