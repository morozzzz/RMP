import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers/rootReducer';
import { CRITERIAS, SORT_TYPES } from './constants/app.constants';

const middlewares = [thunk];

process.env.NODE_ENV === 'developsment' && middlewares.push(logger);

export default (initialState = {
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
}) => createStore(reducer, initialState, applyMiddleware(...middlewares));
