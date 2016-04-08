'use strict'

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevServer = require('webpack-dev-server');
var app = new (require('express'))();
let webpackConfig = require('./webpack.config');
const fs = require('fs-extra');
const PORT = '8080';
const HOST = '0.0.0.0';
const compile = process.argv.findIndex((a) => a.toLowerCase() === '-c') !== -1;
const debug = process.argv.findIndex((a) => a.toLowerCase() === '-d') !== -1;
fs.copySync('src/index.html','dist/index.html');
if(compile){
    //generate static files to './dist'
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress:{warnings:false}
    }));
    webpack(webpackConfig).run((err,stats)=>{
        console.log('[webpack compiled]',err?err:stats);
    });
}else if(debug){
    //start webpack dev server
    webpackConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:8080/','webpack/hot/dev-server');
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
    const compiler  = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler,{
        hot:true,
        historyApiFallback:true,
        //noInfo:true,
        contentBase:'./dist',
        publicPath:'/assets/'
    }));
    app.use(webpackHotMiddleware(compiler));

    app.get('/',(req,res)=>{
        res.sendFile(__dirname+'/dist/index.html');
    })
    app.listen(PORT,HOST,function(){
        console.log(`server is running at:${HOST}:${PORT}`);
    });
}else{
    //start webpack dev server
    webpackConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:8080/','webpack/hot/dev-server');
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
    const compiler  = webpack(webpackConfig);
    const server = new webpackDevServer(compiler,{
        hot:true,
        historyApiFallback:true,
        //noInfo:true,
        contentBase:'./dist',
        publicPath:'/assets/'
    });
    server.listen(PORT,HOST,function(){
        console.log(`server is running at:${HOST}:${PORT}`);
    });
}
