import React from 'react';
import {render} from 'react-dom'

import App from './containers/App';
import {Provider} from 'react-redux';
import cofigureStore from './store/configureStore';
const store = cofigureStore();

import injectTabEventPlugin from 'react-tap-event-plugin';
require('./styles/index.scss');
injectTabEventPlugin();
//定义一个全局的log函数
window.logger = function(...msg){
    console.error('%c[DEBUG INFO]','font-weight:bold;color:blue;',...msg);
}

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app'));
