/**
 * Created by kevin on 16-4-24.
 */
"use strict"
const webpack = require('webpack');

const path = require('path');
module.exports = {
    entry:  ['mocha!./test/index.js'],
    output: {
        path: __dirname,
        filename: 'test_bundle.js',
        publicPath: ''
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
            }
        ]
    }
}

