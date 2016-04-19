"use strict"
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        vendor: ['react', 'react-router', 'react-dom', 'material-ui'],
        app: ['./src/index.js']
    },
    output: {
        path: __dirname + '/dist/assets/',
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: false,
                    presets: ['es2015', 'react', 'stage-1'],
                    plugins: [
                        'transform-decorators-legacy',
                        'transform-class-properties'
                    ]
                }
            },
            //load icon-font
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            //{test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' }
            {test: /\.(css|sass|scss)$/, loader: "style!css!sass"},
            {test:/\.(png|jvendorpg)$/,loader:"url-loader?limit=10000&name=[name].[ext]"},
            //{test:/\.jade$/,loader:"jade"}
        ]
    },
    plugins: [
        new webpack.BannerPlugin(`This file is created by Kevin Tan ${(new Date()).toLocaleDateString()}`),
        new CleanWebpackPlugin(['dist/assets'], {
            verbose: true,
            dry: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js',
            minChunks: 3
        }, 'vendor.bundle.js'),
        new webpack.NoErrorsPlugin(),
        // new HtmlWebpackPlugin({
        //     title: 'clanguage'
        // }),
        // new CopyWebpackPlugin([
        //     {from: 'src/index.html', to: '../index.html', force: true}
        // ])
    ]
}

