/**
 * Created by kevin on 16-4-8.
 */
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Layout from './Layout'
import Repos from './Repos';
import Repo from './Repo';
import Home from './Home';
import Problems from './Problems';
import Status from './Status';
import Ranks from './Ranks';
import Contests from './Contests';
import Contest from './Contest';
import ContestOverview from './Contest/ContestOverview';
import Discuss from './Discuss';
import {connect} from 'react-redux';
import {initialize} from '../actions';

@connect()
export default class App extends React.Component {
    //组件挂载之时
    componentDidMount=()=>{
        //触发初始化事件
        this.props.dispatch(initialize());
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/problems" component={Problems}/>
                    <Route path="/status" component={Status}/>
                    <Route path="/ranks" component={Ranks}/>
                    <Route path="/contests" component={Contests}/>
                    <Route path="/contests/:id" component={Contest}>
                        <IndexRoute component={ContestOverview}/>
                        <Route path="/contests/:id/overview" component={ContestOverview}/>
                    </Route>
                    <Route path="/discuss" component={Discuss}/>
                </Route>
            </Router>
        )
    }
}