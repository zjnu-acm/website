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
import C_Overview from './contest/Overview';
import C_Problems from './contest/Problems';
import C_Status from './contest/Status';
import C_Problem from './contest/Problem';
import C_Submit from './contest/Submit';
import C_Submission from './contest/Submission';
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
                        <IndexRoute component={C_Overview}/>
                        <Route path="overview" component={C_Overview}/>
                        <Route path="problems" component={C_Problems}/>
                        <Route path="problems/:problemOrder" component={C_Problem}/>
                        <Route path="problems/:problemOrder/submit" component = {C_Submit}/>
                        <Route path="status" component={C_Status}/>
                        <Route path="status/:submissionId" component={C_Submission}/>
                    </Route>
                    <Route path="/discuss" component={Discuss}/>
                </Route>
            </Router>
        )
    }
}