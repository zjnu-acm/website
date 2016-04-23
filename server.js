'use strict'

const webpack = require('webpack');
const router = require('./router');
const cookieParser = require('cookie-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
var app = new (require('express'))();
let webpackConfig = require('./webpack.config');
const fs = require('fs-extra');
const PORT = '3000';
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
    webpackConfig.entry.app.unshift('webpack-hot-middleware/client?reload=true');
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        noInfo:true,
        contentBase: './dist',
        publicPath: '/assets/'
    }));

    app.use(webpackHotMiddleware(compiler));
    app.use(cookieParser());
    //logger
    app.use((req, res, next)=> {
        console.log('Time:', Date.now());
        console.log('request', req.url);
        console.log(req.cookies);
        next();
    });
    app.use('/api',router);
    app.get('/favicon.ico',(req,res)=>{
        res.sendFile(__dirname+'/dist/favicon.ico');
    })
    app.get('*',(req,res)=>{
        res.sendFile(__dirname + '/dist/index.html');
    })
    app.listen(PORT,HOST,function(){
        console.log(`server is running at:${HOST}:${PORT}`);
    });
}
