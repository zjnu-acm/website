'use strict'
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
let webpackConfig = require('./webpack.config');
const fs = require('fs-extra');
const PORT = '8080';
const HOST = '0.0.0.0';
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
