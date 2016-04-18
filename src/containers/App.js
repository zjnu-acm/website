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
import Problems from './Problems';
import Status from './Status';
import Ranks from './Ranks';
import Main from './Main';
import Contests from './Contests';
import Contest from './Contest';
import ContestOverview from './Contest/ContestOverview';
import Discuss from './Discuss';
export default class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route component={Main}>
                        <Route path="/problems" component={Problems}/>
                        <Route path="/status" component={Status}/>
                        <Route path="/ranks" component={Ranks}/>
                        <Route path="/contests" component={Contests} />
                        <Route path="/contests/:id" component={Contest}>
                            <IndexRoute component={ContestOverview} />
                            <Route path="/contests/:id/overview" component={ContestOverview} />
                        </Route>
                        <Route path="/discuss" component={Discuss} />
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