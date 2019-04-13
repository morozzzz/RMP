import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/rootReducer';

import MainPage from './components/MainPage/MainPage';
import DetailPage from './components/DetailPage/DetailPage';
import { CRITERIAS } from './constants/app.constants';

const initialState = {
    searchParams: {
        searchBy: CRITERIAS.TITLE,
        searchValue: '',
    },
    movies: [],
};

const store = createStore(reducer, initialState, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <MainPage />
    </Provider>,
    document.getElementById('root'),
);
