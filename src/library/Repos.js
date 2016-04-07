/**
 * Created by kevin on 16-2-26.
 */
import React from 'react';
import {Link} from 'react-router';
export default React.createClass({
    render(){
        return <div>
            <h2>Repos</h2>
            <ul>
                <li><Link to="/repos/rackt/react-router" activeClassName="active">React Router</Link></li>
                <li><Link to="/repos/facebook/react" activeClassName="active">React</Link></li>
            </ul>
            {this.props.children}
        </div>
    }
})