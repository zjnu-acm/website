/**
 * Created by kevin on 16-4-8.
 */
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Layout from './Layout'
import About from './About';
import Repos from './Repos';
import Repo from './Repo';
import Home from './Home';
import ProblemList from './ProblemList';
import Status from './Status';
import Main from './Main';


export default class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Home}/>
                    <Route path="/Home" component={Home}/>
                    <Route component={Main}>
                        <Route path="/problemList" component={ProblemList}/>
                        <Route path="/status" component={Status}/>
                    </Route>
                    <Route path="/repos" component={Repos}>
                        <Route path="/repos/:userName/:repoName" component={Repo}/>
                    </Route>
                    <Route path="/about" component={About}/>
                </Route>
            </Router>
        )
    }
}