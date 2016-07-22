/**
 * Created by FengZQ on 2016/6/12.
 * webpack config file
 */
"use strict";
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    //页面入口
    entry: {
        commons: ['jquery', 'bts'],
        main: './src/js/main.js'
    },
    //输出配置
    output: {
        path: './build',
        filename: 'js/[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel',
            query: {
                presets: ['es2015'],
                compact: false
            }
        }, {
            test: /\.css$/,
            // loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                loaders: ['style-loader','css-loader'],
        }, {
            test: /\.(jpg|png|svg|gif)$/,
            loader: 'url?limit=8192&name=../img/[name].[ext]'
        }]
    },
    resolve: {
        alias: {
            bts: './src/js/bootstrap'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'js/common.bundle.js'
        }),
        new HtmlWebpackPlugin({
            title: 'My wordpress theme!',
            template: './src/index.html',
            filename: 'index.html'
        }),
        //link css
        // new ExtractTextPlugin("style.css"),
        //全局引入
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ]

};
