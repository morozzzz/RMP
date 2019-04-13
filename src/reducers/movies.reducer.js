import { handleActions } from 'redux-actions';
import { } from 'react-redux';
import {
    MOVIES_FETCH_SUCCESS,
    SORT_MOVIES
} from '../constants/actionTypes.constants';

export default handleActions(
    {
        [MOVIES_FETCH_SUCCESS]: (state, action) => (
            {
                ...state,
                general: action.payload,
            }
        ),
    },
    {},
);
