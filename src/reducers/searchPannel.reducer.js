import { handleActions } from 'redux-actions';
import {
    SET_ACTIVE_CRITERIA,
    UPDATE_SERACH_TEXT,
} from '../constants/actionTypes.constants';

export default handleActions(
    {
        [SET_ACTIVE_CRITERIA]: (state, action) => ({
            ...state,
            searchBy: action.payload,
        }),
        [UPDATE_SERACH_TEXT]: (state, action) => ({
            ...state,
            searchValue: action.payload,
        }),
    },
    {},
);
