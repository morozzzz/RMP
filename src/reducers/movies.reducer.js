import { handleActions } from 'redux-actions';
import { } from 'react-redux';
import {
    MOVIES_FETCH_SUCCESS,
    STORE_DETAILED_MOVIE,
    RELATED_MOVIES_FETCH_SUCCESS,
    MOVIES_FOUND,
    MOVIES_NOT_FOUND,
} from '../constants/actionTypes.constants';

export default handleActions(
    {
        [MOVIES_FETCH_SUCCESS]: (state, action) => (
            {
                ...state,
                general: action.payload,
            }
        ),
        [RELATED_MOVIES_FETCH_SUCCESS]: (state, action) => (
            {
                ...state,
                related: action.payload,
            }
        ),
        [MOVIES_FOUND]: state => (
            {
                ...state,
                isMoviesFound: true,
            }
        ),
        [MOVIES_NOT_FOUND]: state => (
            {
                ...state,
                isMoviesFound: false,
            }
        ),
        [STORE_DETAILED_MOVIE]: (state, action) => (
            {
                ...state,
                detailed: action.payload,
            }
        ),
    },
    {},
);
