import { handleActions } from 'redux-actions';
import {
    MOVIES_FETCH_SUCCESS,
} from '../constants/actionTypes.constants';

export default handleActions(
    {
        [MOVIES_FETCH_SUCCESS]: (state, action) => (
            {
                ...state,
                movies: action.payload,
            }
        ),
    },
    {},
);
