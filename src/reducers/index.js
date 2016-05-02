/**
 * Created by kevin on 16-4-8.
 */
import {combineReducers} from 'redux';
import account from './account';
import dialogs from './dialogs';
import navTab from './navTab';
import {problems, problem} from './problems';
import {submissions,submission} from './submissions';
import {users,user} from './users';
import {contests,contest,cproblems} from './contests';
import {languages} from './languages';
import {standings} from './standings';
import {topics,topic} from './topics';
const rootReducer = combineReducers(Object.assign({
    account,
    navTab,
    dialogs,
    problems,
    problem,
    submissions,
    submission,
    contests,
    contest,
    cproblems,
    languages,
    users,
    user,
    standings,
    topics,
    topic
}));

export default rootReducer;