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
window.logger = function(config = {line:'unknown',file:'unknown',type:'info'},...msg){
    let logger = ()=>{};
    switch(config.type){
        case 'info':
            logger = console.info.bind(console);
            break;
        case 'warn':
            logger = console.warn.bind(console);
            break;
        case 'error':
            logger = console.error.bind(console);
        default:
            logger = console.log.bind(console);
    }
    logger('%c[file:%s line:%s]','font-weight:bold;color:blue;',config.file,config.line,...msg);
}

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app'));
