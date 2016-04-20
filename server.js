'use strict'

const webpack = require('webpack');
const router = require('./router');
const cookieParser = require('cookie-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
var app = new (require('express'))();
let webpackConfig = require('./webpack.config');
const fs = require('fs-extra');
const PORT = '8080';
const HOST = '0.0.0.0';
const fallback= require('express-history-api-fallback');
const compile = process.argv.findIndex((a) => a.toLowerCase() === '-c') !== -1;
fs.copySync('src/index.html','dist/index.html');
if(compile){
    //generate static files to './dist'
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress:{warnings:false}
    }));
    webpack(webpackConfig).run((err,stats)=>{
        console.log('[webpack compiled]',err?err:stats);
    });
}else{
    //start webpack dev server
    webpackConfig.entry.app.unshift('webpack-hot-middleware/client');
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        noInfo:true,
        contentBase: './dist',
        publicPath: '/assets/'
    }));

    app.use(webpackHotMiddleware(compiler));
    app.use(cookieParser())
    app.use('/',router);
    
    app.listen(PORT,HOST,function(){
        console.log(`server is running at:${HOST}:${PORT}`);
    });
}
