import { createAction } from 'redux-actions';
import {
    MOVIES_FETCH_SUCCESS,
} from '../constants/actionTypes.constants';
import { getMovies } from '../services/MovieService';

const moviesFetchSuccess = createAction(MOVIES_FETCH_SUCCESS);

const fetchMovies = options => dispatch => getMovies(options)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        return response.json();
    })
    .then((formattedResp) => {
        dispatch(moviesFetchSuccess(formattedResp.data));
    });


export {
    fetchMovies,
};
