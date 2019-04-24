import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/rootReducer';
import { CRITERIAS, SORT_TYPES } from './constants/app.constants';
import MainPage from './containers/MainPage/MainPage';
import DetailPage from './containers/DetailPage/DetailPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

const persistConfig = {
    key: 'root',
    storage,
};

const initialState = {
    searchParams: {
        searchBy: CRITERIAS.TITLE,
        search: '',
        sortBy: SORT_TYPES.RELEASE_DATE,
        sortOrder: 'desc',
    },
    movies: {
        general: [],
        detailed: {},
    },
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, initialState, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
            <BrowserRouter>
                <Switch>
                    <Route path="/film/:id" component={DetailPage} />
                    <Route path="/search" component={MainPage} />
                    <Route exact path="/" component={MainPage} />
                    <Route path="" component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
