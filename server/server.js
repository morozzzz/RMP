/* eslint-disable global-require */
const express = require('express');

const server = express();

if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
    const webpackConfig = require('../webpack');

    const compiler = webpack(webpackConfig);

    server.use(webpackDevMiddleware(compiler));
    server.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
    server.use(webpackHotServerMiddleware(compiler));
} else {
    const serverRenderer = require('../public/js/serverRenderer').default;

    server.use(express.static('public'));
    server.use(serverRenderer());
}

module.exports = server;
