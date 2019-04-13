import { combineReducers } from 'redux';
import searchParams from './searchPannel.reducer';
import mainPage from './mainPage.reducer';

export default combineReducers({
    searchParams,
    mainPage,
});
