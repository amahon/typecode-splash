
var path = require('path');

var webpack = require('webpack');
var plugins = require('webpack-load-plugins')();

var merge = require('webpack-merge');

var PATHS = {
    app: path.join(__dirname, 'index.js'),
    build: path.join(__dirname, 'build')
};

var common = {
    entry: {
        app: PATHS.app
    },
    output: {
        publicPath: '/',
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new plugins.html({
            template: 'app.html',
            inject: 'body'
        })
    ],
    module: {
        loaders: [
            { test: /\.css$/, loaders: ["style", "css-loader"] },
            { test: /\.scss$/, loaders: ["style", "css-loader", "sass"] },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
              query: {
                presets: ['es2015']
              }
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        historyApiFallback: {
            index: '/'
        },
        proxy: {

        }
    }
};

var config;

switch(process.env.npm_lifecycle_event) {
    default:
        config = merge(common, {
            devtool: 'eval-source-map',
            plugins: [
                new webpack.DefinePlugin({
                    '__DEVTOOLS__': true,
                    'process.env': {
                        'NODE_ENV': JSON.stringify('development')
                    }
                })
            ]
        });
        break;
}

module.exports = config;