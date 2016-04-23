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
window.logger = function(file='unknown',...msg){
    console.info('%c[file:%s]','font-weight:bold;color:blue;',file,...msg);
}

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app'));
