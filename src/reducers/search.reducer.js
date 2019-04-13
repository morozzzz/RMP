import { handleActions } from 'redux-actions';
import {
    SET_SEARCH_CRITERIA,
    UPDATE_SERACH_TEXT,
    UPDATE_SORT_TYPE,
} from '../constants/actionTypes.constants';

export default handleActions(
    {
        [SET_SEARCH_CRITERIA]: (state, action) => ({
            ...state,
            searchBy: action.payload,
        }),
        [UPDATE_SERACH_TEXT]: (state, action) => ({
            ...state,
            search: action.payload.trim(),
        }),
        [UPDATE_SORT_TYPE]: (state, action) => ({
            ...state,
            sortBy: action.payload,
        }),
    },
    {},
);
