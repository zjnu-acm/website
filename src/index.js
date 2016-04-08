import React from 'react';
import {render} from 'react-dom'

import App from './containers/App';
import {Provider} from 'react-redux';
import cofigureStore from './store/configureStore';
const store = cofigureStore();

import global from './global';
import injectTabEventPlugin from 'react-tap-event-plugin';
require('./styles/index.scss');
global();
injectTabEventPlugin();

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app'));
