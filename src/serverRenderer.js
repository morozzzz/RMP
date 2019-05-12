/* eslint-disable react/jsx-indent-props */

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import configureStore from './configureStore';
import App from './app';

function renderHTML(html, preloadedState) {
    return `
    <!DOCTYPE html>
    <html lang = "en">
        <head>
            <meta charset = "UTF-8">
            <title>Netflixroulette</title>
            <base href="/">
            ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
            <div id="app">${html}</div>
            <script>
                window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script src="/js/main.js"></script>
        </body>
    </html>
  `;
}

export default function serverRenderer() {
    return (req, res) => {
        const store = configureStore();
        const context = {};
        const app = (
            <App
                context={context}
                location={req.url}
                Router={StaticRouter}
                store={store}
            />
        );
        const htmlString = renderToString(app);

        if (context.url) {
            res.writeHead(302, {
                Location: context.url,
            });
            res.end();
            return;
        }

        const preloadedState = store.getState();

        res.send(renderHTML(htmlString, preloadedState));
    };
}
