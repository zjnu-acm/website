import React from 'react'
import {render} from 'react-dom'
import App from './library/App'
import About from './library/About';
import Repos from './library/Repos';
import Repo from './library/Repo';
import Home from './library/Home';
import ProblemList from './library/ProblemList';
import Status from './library/Status';
import Main from './library/Main'

import global from './global';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import injectTabEventPlugin from 'react-tap-event-plugin';
require('./styles/index.scss')
global();
injectTabEventPlugin();

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/Home" component={Home}/>
            <Route component={Main}>
                <Route path="/problemList" component={ProblemList}/>
                <Route path="/status" component={Status} />
            </Route>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('app'));
