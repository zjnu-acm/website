/**
 * Created by kevin on 16-2-28.
 */
import React from 'react';
export default React.createClass({
    render(){
        return (
            <div>
                <h2>{this.props.params.repoName}</h2>
            </div>
        )
    }
})