import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './configureStore';
import App from './app';

const store = configureStore(window.PRELOADED_STATE);

hydrate(<App Router={BrowserRouter} store={store} />, document.getElementById('app'));
