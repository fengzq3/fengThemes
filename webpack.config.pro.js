/**
 * Created by FengZQ on 2016/6/12.
 * webpack config file
 */
"use strict";
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    //页面入口
    entry: {
        commons: ['jquery', 'bts'],
        main: './src/js/main.js'
    },
    //输出配置
    output: {
        path: './production',
        filename: 'js/[name].[hash:8].js'
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
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                // loader: 'style-loader!css-loader'
            }, {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader?limit=8192'
            }, {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                loader: "file-loader?name=./fonts/[name].[ext]"
            }]
    },
    //提取公共lib
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'js/common.[hash:8].js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: true,
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin("style.css"),
        new HtmlWebpackPlugin({
            title: "新APP",
            template: 'src/index.html',
            filename: 'index.html'

        }),
        // removes a lot of debugging code in React
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        // keeps hashes consistent between compilations
        new webpack.optimize.OccurenceOrderPlugin(),

    ],
    resolve: {
        alias: {
            bts: './src/js/bootstrap'
        }
    }

};
