import { createAction } from 'redux-actions';
import {
    SET_SEARCH_CRITERIA,
    UPDATE_SERACH_TEXT,
    UPDATE_SORT_TYPE,
} from '../constants/actionTypes.constants';

const setActiveCrtiteria = createAction(SET_SEARCH_CRITERIA);
const updateSearchText = createAction(UPDATE_SERACH_TEXT);
const updateSortType = createAction(UPDATE_SORT_TYPE);

export {
    setActiveCrtiteria,
    updateSearchText,
    updateSortType,
};
