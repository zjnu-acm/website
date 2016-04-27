/**
 * Created by kevin on 16-4-8.
 */
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Layout from './Layout'
import Home from './Home';
import Problems from './Problems';
import Problem from './Problem';
import Submit from './Submit';
import Status from './Status';
import Submission from './Submission';
import Ranks from './Ranks';
import Contests from './Contests';

import Contest from './contest/Index';
import Overview from './contest/Overview';


import Discuss from './Discuss';

export default class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/problems" component={Problems}/>
                    <Route path="/problems/:problemId" component={Problem}/>
                    <Route path="problems/:problemId/submit" component={Submit} />
                    
                    <Route path="/status" component={Status}/>
                    <Route path="/status/:submissionId" component={Submission}/>
                    <Route path="/ranks" component={Ranks}/>
                    <Route path="/contests" component={Contests}/>
                    <Route path="/contests/:contestId" component={Contest}>
                        <IndexRoute component={Overview}/>
                        <Route path="/contests/:contestId/overview" component={Overview}/>
                    </Route>
                    <Route path="/discuss" component={Discuss}/>
                </Route>
            </Router>
        )
    }
}