/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <div zDepth={1} className="content-wrapper container">
                {this.props.children}
            </div>
        )
    }
}