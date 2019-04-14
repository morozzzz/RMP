import { handleActions } from 'redux-actions';
import { } from 'react-redux';
import {
    MOVIES_FETCH_SUCCESS,
    SET_DETAILED_MOVIE,
    RELATED_MOVIES_FETCH_SUCCESS,
} from '../constants/actionTypes.constants';

export default handleActions(
    {
        [MOVIES_FETCH_SUCCESS]: (state, action) => (
            {
                ...state,
                general: action.payload,
            }
        ),
        [SET_DETAILED_MOVIE]: (state, action) => (
            {
                ...state,
                detailed: action.payload,
            }
        ),
        [RELATED_MOVIES_FETCH_SUCCESS]: (state, action) => (
            {
                ...state,
                related: action.payload,
            }
        ),
    },
    {},
);
