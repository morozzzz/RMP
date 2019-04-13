import { combineReducers } from 'redux';
import searchParams from './search.reducer';
import movies from './movies.reducer';

export default combineReducers({
    searchParams,
    movies,
});
